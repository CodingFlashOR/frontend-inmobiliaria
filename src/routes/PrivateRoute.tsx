import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext) as AuthContextType;

  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
