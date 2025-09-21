import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ROUTES } from '../util/routes'
import uvezusLogo from '../assets/logo.svg'

function SplashScreen() {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate(ROUTES.codeConfirm)
		}, 1000)
	}, [navigate])

	return (
		<div className="container h-screen font-sans flex justify-center items-center flex-col">
			<div>
				<span className="text-sm sm:text-xl">
					<b>Веб приложение</b>
				</span>
			</div>
			<div>
				<span className="text-sky-600 text-xl sm:text-4xl">
					<b>УВЕЗУСЬ</b>
				</span>
			</div>
			<div>
				<img src={uvezusLogo} alt="uvezus logo" />
			</div>
			<div>
				<span className="text-gray-600 text-sm sm:text-xl">
					Такси Якутск-Октемцы
				</span>
			</div>
		</div>
	)
}

export { SplashScreen }
