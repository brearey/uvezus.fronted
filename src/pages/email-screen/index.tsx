import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useInput } from '../../hooks/use-input'
import './index.css'
import uvezusLogo from '../../assets/logo.svg'

export function EmailScreen() {
  const navigate = useNavigate()
  const [btnEnabled, setBtnEnabled] = useState(true)
  const emailInput = useInput('')

  return (
    <div className="container">
      <div className="logo-wrapper">
        <img src={uvezusLogo} alt="uvezus logo" />
      </div>
      <div className="email-form">
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
        <button disabled={btnEnabled}>Get code</button>
      </div>
    </div>
  )
}
