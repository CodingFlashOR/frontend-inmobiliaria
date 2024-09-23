import { useEffect } from 'react'
import Router from './routes/Router'
import useAuthStore from './context/authStore'

function App () {
  const { start } = useAuthStore()

  useEffect(() => {
    start()
  }, [start])
  return (
    <Router />
  )
}

export default App
