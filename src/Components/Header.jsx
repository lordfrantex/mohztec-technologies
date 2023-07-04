import React, { useEffect } from 'react'
import '../Styles/novelStyle.css'
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { checkLoggedIn, getTotal } from '../features/cart/CartSlice';
import { useState } from 'react';

function Header() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])
    const { singleProject } = useParams()
    const navigate = useNavigate()

    const { cartItems, amount, CartTotalQuantity } = useSelector(state => state.cart)
    const { accountName, jwtToken } = JSON.parse(localStorage.getItem('accountName')) || ''

    const logout = () => {
        localStorage.removeItem('accountName')
        localStorage.removeItem('account')
        navigate('/account')
        dispatch(checkLoggedIn(false))

    }
    const [showAccount, setShowAccount] = useState(false)
    const toggleAccount = () => {
        setShowAccount(prev => !prev)
    }
    return (

        <header>
            <div className="header-logo"> <NavLink to="/" className="logo"><img src="/novelPics/mohztec_logo2.jpg" alt="" /></NavLink>
            </div>

            <div className="header-quote">
                <i className="fab fa-gratipay"></i>
                <NavLink to='/cart'><i className="fa-solid fa-cart-shopping"><span>{CartTotalQuantity}</span></i></NavLink>

                <form action="" className="search">
                    <input type="text" placeholder="Enter Your Search" />
                    <a href="#" className="submit-btn"><i className="fa-solid fa-magnifying-glass"></i></a>
                </form>
                {/* <i className="fa-solid fa-circle-user"></i> */}


            </div>
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar"><i className="fa-solid fa-bars"></i></label>
            <nav className="navbar">
                <ul>
                    <li className="main-link"><NavLink to="/">Home</NavLink></li>
                    <li className="main-link"><NavLink to="/about">About</NavLink></li>
                    <li className="main-link"><NavLink to="/services">Services</NavLink>
                    </li>
                    <li className="main-link"> <NavLink to='/product'>Our Shop </NavLink></li>
                    <li className="main-link"><NavLink to="/project">Projects <span><i className="fa-solid fa-sort-down"></i></span></NavLink>
                        <ul>
                            <li> <NavLink to='/project/1'>CCTV Projects</NavLink></li>
                            <li> <NavLink to='/project/3'>Solar Projects</NavLink></li>
                            <li> <NavLink to='/project/5'>Inverter Projects</NavLink></li>
                            <li> <NavLink to='/project/6'>Automatic door Projects</NavLink></li>
                            <li> <NavLink to='/project/4'>Electrical Projects</NavLink></li>
                            <li> <NavLink to='/project/2'>Automations/IoT Projects</NavLink></li>
                        </ul>
                    </li>
                    <li className="main-link"><NavLink to="/contact" >Contact Us</NavLink></li>
                    <li className="main-link"><NavLink to="/blog" >Our Blog</NavLink></li>
                    <li className="main-link"><NavLink to="/training" >Training</NavLink></li>
                    <li className=" account" style={{ padding: '5px' }}>{accountName ? ` Hi ${accountName}` : 'Account'}<i className="fa-solid fa-circle-user"></i>
                        <ul className='account-list'>
                            <li className=''>
                                {!accountName && (<NavLink to='/account'> <button>Login</button></NavLink>)}
                            </li>
                            <li className=''>
                                <NavLink to={`${accountName ? '/accountDetails' : '/account'}`} > <button>Account Details</button></NavLink>
                                {accountName && (<NavLink to='/account'><button onClick={logout}>Logout</button></NavLink>)}
                            </li>
                        </ul></li>


                </ul>
            </nav >

        </header >
    )
}

export default Header