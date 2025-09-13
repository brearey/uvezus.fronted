import { Routes, Route } from 'react-router'
import { EmailScreen } from './pages/email-screen/email-screen'
import { SplashScreen } from './pages/splash-screen/splash-screen'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {
	return (
		<>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				limit={1}
			/>
			<Routes>
				<Route path="/" element={<SplashScreen />} />
				<Route path="/email" element={<EmailScreen />} />
			</Routes>
		</>
	)
}

export default App
