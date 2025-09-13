import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useInput } from '../../hooks/use-input'
import './index.css'
import uvezusLogo from '../../assets/logo.svg'

export function EmailScreen() {
	const navigate = useNavigate()
	const [getCodeBtnDisabled, setGetCodeBtnDisabled] = useState(false)
	const [signInBtnDisabled, setSignInBtnDisabled] = useState(false)
	const emailInput = useInput('')
	const codeInput = useInput('')

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
				<button className="btn" disabled={getCodeBtnDisabled}>
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
