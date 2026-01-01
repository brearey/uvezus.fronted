import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useTimer } from '@siberiacancode/reactuse'
import { useDebounce } from '../hooks/use-debounce'
import { useInput } from '../hooks/use-input'
import { useEmail } from '../http/useEmail'
import { useVerify } from '../http/useVerify'
import { ROUTES } from '../util/routes'
import { validateEmail } from '../util/email'
import { logger } from '../util/logger'
import uvezusLogo from '../assets/logo.svg'

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
	const codeVerifyMutation = useVerify(
		() => toast.success('Код прошел проверку на сервере'),
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
		codeVerifyMutation.mutate(
			{ email: emailInput.value, code: codeInput.value },
			{
				onSuccess: (response) => {
					logger.info(response.data)
					toast.success('Код прошел проверку на сервере')
					navigate(ROUTES.taxiList)
				},
				onError: (error) => {
					setSignInBtnDisabled(true)
					codeInput.reset()
					toast.error(
						error instanceof AxiosError
							? error.response?.data?.message || error.message
							: 'Ваш код неверный'
					)
				},
			}
		)
	}

	return (
		<div className="mx-auto container flex flex-col items-center justify-center min-h-screen p-4">
			<div className="mb-8">
				<img src={uvezusLogo} alt="uvezus logo" className="w-32 h-auto" />
			</div>
			<h1 className="text-2xl font-bold">Войдите с помощью почты</h1>

			<div className="w-full max-w-md mb-6 p-6 bg-white rounded-lg shadow-md">
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Введите вашу почту:
				</label>
				<input
					id="email"
					type="email"
					placeholder="your@email.ru"
					value={emailInput.value}
					onChange={onEmailChanged}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-500 ease-in-out"
				/>
				<div className="mt-3 text-sm text-gray-600">
					<span>Отправить код повторно через {codeTimer.seconds} сек.</span>
				</div>
				<button
					onClick={getCode}
					className="w-full mt-4 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-400 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-500 ease-in-out"
					disabled={getCodeBtnDisabled}
				>
					Получить код
				</button>
			</div>

			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
				<label
					htmlFor="code"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Введите полученный код здесь:
				</label>
				<input
					id="code"
					type="text"
					maxLength={CODE_MAX_LENGTH}
					placeholder="your code..."
					value={codeInput.value}
					onChange={onCodeChanged}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent mb-4 transition duration-500 ease-in-out"
				/>
				<button
					onClick={signIn}
					className="w-full px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-400 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed transition duration-500 ease-in-out"
					disabled={signInBtnDisabled}
				>
					Войти
				</button>
			</div>
		</div>
	)
}
