import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ROUTES } from '../../util/routes'
import uvezusLogo from '../../assets/logo.svg'
import './splash-screen-module.css'

function SplashScreen() {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate(ROUTES.codeConfirm)
		}, 1000)
	}, [navigate])

	return (
		<div className="container jc-center">
			<div>
				<span>
					<b>Веб приложение</b>
				</span>
			</div>
			<div>
				<span className="blue-text">
					<b>УВЕЗУСЬ</b>
				</span>
			</div>
			<div className="logo-wrapper">
				<img src={uvezusLogo} alt="uvezus logo" />
			</div>
			<div>
				<span>
					Такси <span className="blue-text">Якутск-Октемцы</span>
				</span>
			</div>
		</div>
	)
}

export { SplashScreen }
