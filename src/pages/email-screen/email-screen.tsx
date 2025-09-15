import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useTimer } from '@siberiacancode/reactuse'
import { ROUTES } from '../../util/routes'
import { useInput } from '../../hooks/use-input'
import { useDebounce } from '../../hooks/use-debounce'
import { useEmail } from '../../http/useEmail'
import { validateEmail } from '../../util/email'
import uvezusLogo from '../../assets/logo.svg'
import './email-screen-module.css'

const TIMER_SECONDS = 60
const CODE_MAX_LENGTH = 4

export function EmailScreen() {
	const navigate = useNavigate()
	const [getCodeBtnDisabled, setGetCodeBtnDisabled] = useState(true)
	const [signInBtnDisabled, setSignInBtnDisabled] = useState(true)
	const emailInput = useInput('')
	const codeInput = useInput('')
	const debouncedGetCode = useDebounce(setGetCodeBtnDisabled, 500)
	const debouncedSignIn = useDebounce(setSignInBtnDisabled, 300)
	const getCodeMutation = useEmail(
		() => toast.success('Код отправлен на вашу почту'),
		(e) => {
			toast.error(e instanceof AxiosError ? e.message : 'Что-то пошло не так')
		}
	)
	const codeTimer = useTimer(TIMER_SECONDS, {
		onExpire: () => {
			setGetCodeBtnDisabled(!validateEmail(emailInput.value))
		},
		immediately: false, // отключаем автомат. запуск
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
		const emailIsValid = validateEmail(event.target.value)
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
			navigate(ROUTES.taxiList)
		} else {
			setSignInBtnDisabled(true)
			codeInput.reset()
			toast.error('Ваш код неверный')
		}
	}

	return (
		<div className="container jc-center">
			<div>
				<img src={uvezusLogo} alt="uvezus logo" />
			</div>
			<div className="section">
				<label htmlFor="email">Введите вашу почту:</label>
				<br />
				<input
					id="email"
					type="email"
					placeholder="your@email.ru"
					value={emailInput.value}
					onChange={onEmailChanged}
				/>
				<div className="resend-text-wrapper">
					<span>Отправить код повторно через {codeTimer.seconds} сек.</span>
				</div>
				<button onClick={getCode} className="btn" disabled={getCodeBtnDisabled}>
					Получить код
				</button>
			</div>
			<div className="section">
				<label htmlFor="code">Введите полученный код здесь:</label>
				<input
					id="code"
					type="text"
					maxLength={CODE_MAX_LENGTH}
					placeholder="your code..."
					value={codeInput.value}
					onChange={onCodeChanged}
				/>
				<br />
				<button onClick={signIn} className="btn" disabled={signInBtnDisabled}>
					Войти
				</button>
			</div>
		</div>
	)
}
