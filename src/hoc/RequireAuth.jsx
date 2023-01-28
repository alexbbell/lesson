import React from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth';

const RequireAuth = ( {children}) => {
    const location = useLocation();
    const auth = false;
    const {user} = useAuth();

    console.log('location', location);

    if(!user) {
        console.log('nouser');
        return <Navigate to='/login' state={{from: location}} />
    }
    return children;
}

export  { RequireAuth };