import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './index.css'
import uvezusLogo from '../../assets/logo.svg'

function SplashScreen() {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/email')
		}, 1000)
	}, [])

	return (
		<div className="container">
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
