import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot, faCube } from '@fortawesome/free-solid-svg-icons'
import { isValidPassengersCount, isValidAddress } from '../../util/validators'
import uvezusLogo from '../../assets/logo.svg'
import './taxi-list-module.css'
import { toast } from 'react-toastify'

export function TaxiListScreen() {
	const [adultCount, setAdultCount] = useState(1)
	const [childCount, setChildCount] = useState(0)
	const [fromAddress, setFromAddress] = useState(
		'с. Чапаево, ул. Николаева 27/2'
	)
	const [toAddress, setToAddress] = useState('г. Якутск, 203 мкрн. корпус 28')

	const openFromAddressModal = () => {
		const temp = prompt('Введите ваш адрес', fromAddress)
		if (temp && isValidAddress(temp)) {
			setFromAddress(temp)
		} else {
			toast.warn('Введите корректный адрес')
		}
	}

	const openToAddressModal = () => {
		const temp = prompt('Введите ваш адрес', toAddress)
		if (temp && isValidAddress(temp)) {
			setToAddress(temp)
		} else {
			toast.warn('Введите корректный адрес')
		}
	}

	const openAdultModal = () => {
		const temp: number | null = Number(
			prompt('Введите количество взрослых пассажиров', adultCount.toString())
		)
		if (isValidPassengersCount(temp) && temp + childCount > 0) {
			// Должен быть хотя бы один пассажир
			setAdultCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
	}

	const openChildModal = () => {
		const temp: number | null = Number(
			prompt('Введите количество пассажиров-детей', childCount.toString())
		)
		if (isValidPassengersCount(temp) && temp + adultCount > 0) {
			// Должен быть хотя бы один пассажир
			setChildCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
	}

	const showAdultCount = (count: number): string => {
		return `${count} ${count === 1 ? 'взрослый' : 'взрослых'}`
	}

	const showChildCount = (count: number): string => {
		return `${count} ${count === 1 ? 'ребенок' : 'детей'}`
	}

	return (
		<div className="container">
			{/* header */}
			<div className="header">
				<div>
					<img src={uvezusLogo} alt="uvezus logo" height={60} />
				</div>
			</div>

			{/* passenger and address */}
			<div className="passengers-wrapper">
				<div className="left">
					<div className="passengers" onClick={openAdultModal}>
						<FontAwesomeIcon icon={faUser} className="icon adult-icon" />
						<span>{showAdultCount(adultCount)}</span>
					</div>
					<div className="passengers" onClick={openChildModal}>
						<FontAwesomeIcon icon={faUser} className="icon child-icon" />
						<span>{showChildCount(childCount)}</span>
					</div>
					<div className="package">
						<FontAwesomeIcon icon={faCube} className="icon" />
						<input id='package-input' type="checkbox" checked={false} style={{display: 'inline'}}/>
						<label htmlFor="package-input" style={{display: 'inline'}}>Посылка</label>
					</div>
				</div>
				<div className="right">
					<div className="from" onClick={openFromAddressModal}>
						<FontAwesomeIcon
							icon={faLocationDot}
							className="icon location-icon"
						/>
						<span className="address-label">Откуда: {fromAddress}</span>
					</div>
					<div className="to" onClick={openToAddressModal}>
						<FontAwesomeIcon
							icon={faLocationDot}
							className="icon location-icon"
						/>
						<span className="address-label">Куда: {toAddress}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
