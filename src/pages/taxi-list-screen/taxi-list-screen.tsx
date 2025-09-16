import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { AddressModal } from '../../components/address-modal/address-modal'
import uvezusLogo from '../../assets/logo.svg'
import './taxi-list-module.css'

export function TaxiListScreen() {
	const [adultCount, setAdultCount] = useState(1)
	const [childCount, setChildCount] = useState(0)
	const [address, setAddress] = useState('с. Чапаево, ул. Николаева 27/2')
	const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
	const [tempAddress, setTempAddress] = useState(address)

	const handleSaveAddress = () => {
		setAddress(tempAddress)
		setIsAddressModalOpen(false)
	}

	const handleOpenModal = () => {
		setTempAddress(address)
		setIsAddressModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsAddressModalOpen(false)
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
					<div className="passengers">
						<FontAwesomeIcon icon={faUser} className="icon adult-icon" />
						<span>{adultCount} взрос.</span>
					</div>
					<div className="passengers">
						<FontAwesomeIcon icon={faUser} className="icon child-icon" />
						<span>{childCount} реб.</span>
					</div>
				</div>
				<div className="right" onClick={handleOpenModal}>
					<FontAwesomeIcon
						icon={faLocationDot}
						className="icon location-icon"
					/>
					<span className="address-label">{address}</span>
				</div>
			</div>

			<AddressModal
				isAddressModalOpen={isAddressModalOpen}
				handleCloseModal={handleCloseModal}
				tempAddress={tempAddress}
				setTempAddress={setTempAddress}
				handleSaveAddress={handleSaveAddress}
			/>
		</div>
	)
}
