import { useEffect, useState } from "react";
import { type Toast } from '../../types/toast-types'
import './toast-module.css'

export function Toast({toast} : {toast: Toast}) {
	const [visible, setVisible] = useState('visible')
	
	useEffect(() => {
		setTimeout(() => {setVisible('invisible')}, toast.delay * 1000)
	})

	return (
		<div className={`toast-wrapper ${toast.messageType} ${visible}`}>
			<span>{toast.message}</span>
		</div>
	)
}