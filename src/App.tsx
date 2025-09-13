import { Routes, Route } from 'react-router'
import { EmailScreen } from './pages/email-screen/email-screen'
import { SplashScreen } from './pages/splash-screen'
import './App.css'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SplashScreen />} />
				<Route path="/email" element={<EmailScreen />} />
			</Routes>
		</>
	)
}

export default App
