import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

import './address-modal-module.css'
import type { MouseEventHandler } from 'react'

Modal.setAppElement('#root')

export function AddressModal({
	isAddressModalOpen,
	handleCloseModal,
	tempAddress,
	setTempAddress,
	handleSaveAddress,
}: {
	isAddressModalOpen: boolean
	handleCloseModal: () => void
	tempAddress: string
	setTempAddress: (address: string) => void
	handleSaveAddress: MouseEventHandler<HTMLButtonElement>
}) {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			maxWidth: '500px',
			width: '90%',
			borderRadius: '12px',
			border: 'none',
			boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
			padding: '0',
			overflow: 'visible',
		},
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			zIndex: 1000,
		},
	}

	return (
		<>
			<Modal
				isOpen={isAddressModalOpen}
				onRequestClose={handleCloseModal}
				style={customStyles}
				contentLabel="Ввод адреса"
			>
				<div className="address-modal">
					<div className="modal-header">
						<h3>Введите адрес</h3>
						<button
							className="close-button"
							onClick={handleCloseModal}
							aria-label="Закрыть"
						>
							<FontAwesomeIcon icon={faXmark} size="lg" />
						</button>
					</div>

					<div className="modal-body">
						<input
							type="text"
							value={tempAddress}
							onChange={(e) => setTempAddress(e.target.value)}
							className="address-input"
							placeholder="Введите адрес..."
							autoFocus
						/>
					</div>

					<div className="modal-footer">
						<button className="cancel-button" onClick={handleCloseModal}>
							Отмена
						</button>
						<button
							className="save-button"
							onClick={handleSaveAddress}
							disabled={!tempAddress.trim()}
						>
							Сохранить
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}
