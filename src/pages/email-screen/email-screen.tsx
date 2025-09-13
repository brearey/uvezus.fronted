import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useInput } from '../../hooks/use-input'
import './email-screen-module.css'
import uvezusLogo from '../../assets/logo.svg'
import { validateEmail } from '../../util/email'

export function EmailScreen() {
	const navigate = useNavigate()
	const [getCodeBtnDisabled, setGetCodeBtnDisabled] = useState(false)
	const [signInBtnDisabled, setSignInBtnDisabled] = useState(false)
	const emailInput = useInput('')
	const codeInput = useInput('')

	function getCode() {
		if (validateEmail(emailInput.value)) {
			console.log(true)
		} else {
			console.log(false)
		}
	}

	return (
		<div className="container">
			<div>
				<img src={uvezusLogo} alt="uvezus logo" />
			</div>
			<div className="section">
				<label htmlFor="email">Your email</label>
				<br />
				<input
					id="email"
					type="email"
					placeholder="your@email.ru"
					value={emailInput.value}
					onChange={emailInput.onChange}
				/>
				<br />
				<button onClick={getCode} className="btn" disabled={getCodeBtnDisabled}>
					Get code
				</button>
			</div>
			<div className="section">
				<label htmlFor="code">Write your code here:</label>
				<input id="code" type="text" placeholder="your code..." value={codeInput.value} onChange={codeInput.onChange} />
				<br />
				<button className="btn" disabled={signInBtnDisabled}>
					Sign in
				</button>
			</div>
		</div>
	)
}
