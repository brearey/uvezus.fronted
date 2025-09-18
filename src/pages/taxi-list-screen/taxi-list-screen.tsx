import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import uvezusLogo from '../../assets/logo.svg'
import './taxi-list-module.css'
import { toast } from 'react-toastify'

const isCountValid = (count: number) => count && count > 0 && count < 8

export function TaxiListScreen() {
	const [adultCount, setAdultCount] = useState(1)
	const [childCount, setChildCount] = useState(0)
	const [address, setAddress] = useState('с. Чапаево, ул. Николаева 27/2')

	const openAddressModal = () => {
		const temp = prompt('Введите ваш адрес') || address
		setAddress(temp)
	}

	const openAdultModal = () => {
		const temp: number | null = Number(prompt('Введите количество взрослых пассажиров'))
		if (isCountValid(temp)) {
			setAdultCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
	}

	const openChildModal = () => {
		const temp: number | null = Number(prompt('Введите количество пассажиров-детей'))
		if (isCountValid(temp)) {
			setChildCount(temp)
		} else {
			toast.warn('Введите корректное количество')
		}
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
						<span>{adultCount} взрос.</span>
					</div>
					<div className="passengers" onClick={openChildModal}>
						<FontAwesomeIcon icon={faUser} className="icon child-icon" />
						<span>{childCount} реб.</span>
					</div>
				</div>
				<div className="right" onClick={openAddressModal}>
					<FontAwesomeIcon
						icon={faLocationDot}
						className="icon location-icon"
					/>
					<span className="address-label">{address}</span>
				</div>
			</div>

		</div>
	)
}
