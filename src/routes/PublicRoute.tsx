import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../context/authStore'

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? <Navigate to='/' /> : element
}

export default PublicRoute
