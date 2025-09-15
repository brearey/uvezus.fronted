import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import uvezusLogo from '../../assets/logo.svg'
import './taxi-list-module.css'

export function TaxiListScreen() {
	return (
		<div className="container">
			<div className="header">
				<div>
					<img src={uvezusLogo} alt="uvezus logo" height={60} />
				</div>
				<div className="title">
					<span>Выберите такси на котором хотите поехать</span>
				</div>
			</div>

			<div className="address-wrapper">
				<div className="left">
					<div className="parent-count">
						<FontAwesomeIcon icon={faUser} size='3x' className='icon' />
						<span>1 взрос.</span>
					</div>
					<div className="child-count">
						<FontAwesomeIcon icon={faUser} size='2x' className='icon' />
						<span>1 реб.</span>
					</div>
				</div>
				<div className="right">
					<span className="address">с. Чапаево, ул. Николаева 27/2</span>
				</div>
			</div>
		</div>
	)
}
