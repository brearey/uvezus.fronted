import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useInput } from '../../hooks/use-input'
import { useDebounce } from '../../hooks/use-debounce'
import { useEmail } from '../../http/useEmail'
import { validateEmail } from '../../util/email'
import uvezusLogo from '../../assets/logo.svg'
import './email-screen-module.css'

export function EmailScreen() {
	const navigate = useNavigate()
	const [getCodeBtnDisabled, setGetCodeBtnDisabled] = useState(true)
	const [signInBtnDisabled, setSignInBtnDisabled] = useState(true)
	const emailInput = useInput('')
	const codeInput = useInput('')
	const debouncedGetCode = useDebounce(setGetCodeBtnDisabled, 500)
	const debouncedSignIn = useDebounce(setSignInBtnDisabled, 300)
	const getCodeMutation = useEmail(() => {
		toast.success('Code sended')
	})

	function getCode() {
		getCodeMutation.mutate({ email: emailInput.value })
	}

	function onEmailChanged(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		emailInput.onChange(event)
		const emailIsValid = validateEmail(emailInput.value)
		debouncedGetCode(!emailIsValid)
	}

	function onCodeChanged(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		codeInput.onChange(event)
		debouncedSignIn(() => {
			if (codeInput.value.length >= 4 && getCodeMutation.isSuccess) {
				setSignInBtnDisabled(false)
			}
		})
	}

	function signIn() {
		console.log(codeInput.value)
		console.log(getCodeMutation.data?.data.code)

		if (codeInput.value == getCodeMutation.data?.data?.code) {
			navigate('/') // TODO: navigate('/main')
		} else {
			toast.error('Your code is not valid')
		}
	}

	return (
		<div className="container">
			<div>
				<img src={uvezusLogo} alt="uvezus logo" />
			</div>
			<div className="section">
				<label htmlFor="email">Your email</label>
				<br />
				<input
					id="email"
					type="email"
					placeholder="your@email.ru"
					value={emailInput.value}
					onChange={onEmailChanged}
				/>
				<br />
				<button onClick={getCode} className="btn" disabled={getCodeBtnDisabled}>
					Get code
				</button>
			</div>
			<div className="section">
				<label htmlFor="code">Write your code here:</label>
				<input
					id="code"
					type="number"
					placeholder="your code..."
					value={codeInput.value}
					onChange={onCodeChanged}
				/>
				<br />
				<button onClick={signIn} className="btn" disabled={signInBtnDisabled}>
					Sign in
				</button>
			</div>
		</div>
	)
}
