import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(store => store.cart)
    const auth = localStorage.getItem('accountName')
    return (
        (auth && isLoggedIn) ? <Outlet /> : navigate('/account')
    )
}

export default ProtectedRoute