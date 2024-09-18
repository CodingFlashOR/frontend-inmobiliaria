import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../context/authStore'

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { start, isAuthenticated } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      setLoading(false)
    }

    checkAuth()
  }, [start])

  if (loading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? element : <Navigate to='/login' />
}

export default PrivateRoute
