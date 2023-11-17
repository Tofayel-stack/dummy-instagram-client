import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContextElements';
import SmallSpinner from '../components/SmallSpinner';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import BigSpinner from '../components/BigSpinner';

const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <BigSpinner></BigSpinner>
  }
  if(user && !loading ){
    return children
  }

  if(!user && !loading){
    toast.success('Please SignIN First')
    return <Navigate to="/" replace />;
  }

};

export default PrivateRoute;