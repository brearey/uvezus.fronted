import { type ReactNode } from 'react'

type ModalProps = {
	isOpen: boolean
	title: string
	onClose: () => void
	children: ReactNode
}

export function Modal({ isOpen, title, onClose, children }: ModalProps) {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
				<h3 className="mb-4 text-lg font-semibold">{title}</h3>

				{children}

				<div className="mt-4 flex justify-end gap-2">
					<button
						onClick={onClose}
						className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
					>
						Отмена
					</button>
				</div>
			</div>
		</div>
	)
}
