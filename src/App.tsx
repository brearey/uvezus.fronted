import { Routes, Route, BrowserRouter } from 'react-router'
import { EmailScreen } from './pages/email-screen/email-screen'
import { SplashScreen } from './pages/splash-screen/splash-screen'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
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
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
