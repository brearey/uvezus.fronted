import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useTimer } from '@siberiacancode/reactuse'
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
	const getCodeMutation = useEmail(
		() => toast.success('Code sended'),
		(e) => {
			toast.error(e instanceof AxiosError ? e.message : 'Unknown error')
		},
	)
	const codeTimer = useTimer(5, {
		onExpire: () => { setGetCodeBtnDisabled(!validateEmail(emailInput.value)) },
		immediately: false
	})

	function getCode() {
		getCodeMutation.mutate({ email: emailInput.value })
		setGetCodeBtnDisabled(true)
		codeTimer.start()
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
		const success = event.target.value.length >= 4 && getCodeMutation.isSuccess
		debouncedSignIn(!success)
	}

	function signIn() {
		if (codeInput.value == getCodeMutation.data?.data?.code) {
			navigate('/') // TODO: navigate('/main')
		} else {
			setSignInBtnDisabled(true)
			codeInput.reset()
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
				<div className='resend-text-wrapper'>
					<span>Send code again in {codeTimer.seconds} sec</span>
				</div>
				<button onClick={getCode} className="btn" disabled={getCodeBtnDisabled}>
					Get code
				</button>
			</div>
			<div className="section">
				<label htmlFor="code">Write your code here:</label>
				<input
					id="code"
					type="text"
					maxLength={4}
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
