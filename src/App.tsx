import { Routes, Route } from 'react-router'
import './App.css'
import { SplashScreen } from './pages/splash-screen'
import { EmailScreen } from './pages/email-screen'

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
