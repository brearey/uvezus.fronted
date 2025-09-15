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
		</div>
	)
}
