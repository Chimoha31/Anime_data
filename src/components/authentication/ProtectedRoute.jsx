import React from 'react';
import {useUserAuth} from '../authentication/context/AuthContext';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {user} = useUserAuth();
  // const {auth} = useUserAuth();
  if(!user) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute;

