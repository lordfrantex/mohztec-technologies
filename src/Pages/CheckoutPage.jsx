import React from 'react'
import { useRef } from 'react';
import Payment from '../Components/Payment'
import Shipping from '../Components/Shipping'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import Order from '../Components/Order'
import { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const CheckoutPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const filled = useRef(null)
    useEffect(() => {
        if (location.pathname === '/checkoutPage/order') {
            filled.current.style.width = '360px'
        } else if (location.pathname === '/checkoutPage') {
            filled.current.style.width = '100px'
        } else if (location.pathname === '/checkoutPage/payment') {
            filled.current.style.width = '230px'
        }
    }, [location.pathname])



    const toggleShipping = () => {
        filled.current.style.width = "100px"
    }
    const togglePayment = () => {
        filled.current.style.width = "230px"
    }

    const toggleOrder = () => {
        filled.current.style.width = "360px"
    }



    return (
        <div>
            <Header />
            <div className="checkout-bar">
                <div className="checkout-filled" ref={filled}></div>
                <NavLink className="step-col" to='/checkoutPage' onClick={toggleShipping}>Shipping</NavLink>
                <NavLink className="step-col" to='payment' onClick={togglePayment} >Payment</NavLink>
                <NavLink className="step-col" to='order' onClick={toggleOrder} >Orders</NavLink>
            </div>
            <Outlet context={[toggleShipping, toggleOrder, togglePayment]} />
            <Footer />
        </div>

    )
}

export default CheckoutPage