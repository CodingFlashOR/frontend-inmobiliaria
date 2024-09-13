import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../context/authStore'

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return isAuthenticated ? element : <Navigate to='/' />
}

export default PrivateRoute
