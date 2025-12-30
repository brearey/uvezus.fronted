import { Routes, Route, BrowserRouter } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { EmailScreen } from './pages/email-screen'
import { SplashScreen } from './pages/splash-screen'
import { TaxiListScreen } from './pages/taxi-list-screen'
import { ROUTES } from './util/routes'

const queryClient = new QueryClient()

function App() {
  console.log('ENV variables:', process.env);
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
					<Route path={ROUTES.index} element={<SplashScreen />} />
					<Route path={ROUTES.codeConfirm} element={<EmailScreen />} />
					<Route path={ROUTES.taxiList} element={<TaxiListScreen />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
