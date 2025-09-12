import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './index.css'

function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/email')
    }, 1000)
  }, [])

  return (
    <>
      <h1>SplashScreen</h1>
    </>
  )
}

export { SplashScreen }
