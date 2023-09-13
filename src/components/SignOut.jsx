import React from 'react'
import { logout } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SignOut = () => {
    const dispatch = useDispatch()
    dispatch(logout())

    return (
        <Navigate to="/" />
    )
}

export default SignOut
