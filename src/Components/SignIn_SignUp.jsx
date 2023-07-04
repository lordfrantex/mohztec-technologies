import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { checkLoggedIn } from '../features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutPage from '../Pages/CheckoutPage'

const url = 'https://course-api.com/react-useReducer-cart-project'

const SignIn_SignUp = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(store => store.cart.isLoggedIn)
    useEffect(() => {
    }, [isLoggedIn])


    const { accountName, jwtToken } = JSON.parse(localStorage.getItem('accountName')) || ''


    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('account')) || '')
    useEffect(() => {
        localStorage.setItem('account', JSON.stringify(formData))
    }, [formData])

    const handleForm = (e) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })) }

    const signup = useRef(null)
    const signin = useRef(null)
    const toggle = useRef(null)
    const signUp = () => {
        signin.current.style.left = "-400px"
        signup.current.style.left = "0px"
        toggle.current.style.left = "80px"

    }
    const signIn = () => {
        signup.current.style.left = "400px"
        signin.current.style.left = "0px"
        toggle.current.style.left = "0px"


    }

    const submit = async (e) => {
        e.preventDefault();

        const checkout = location.state && location.state.prevRoute === 'checkout'
        const data = await axios.post('https://course-api.com/axios-tutorial-post', {
            name: formData.name,
            email: formData.email,
        })
        try {
            localStorage.setItem('accountName',
                JSON.stringify({ accountName: data.data.user.name, jwtToken: data.data.msg }))
            dispatch(checkLoggedIn(!isLoggedIn))
            checkout ? navigate('/checkoutPage') : navigate('/')
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            <Header />
            <div className="account-cover">
                <div className='account-container'>

                    <div className="switch">
                        <div className="btn-toggle" ref={toggle}></div>

                        <button onClick={signIn} >Sign in</button>
                        <button onClick={signUp} >Sign up</button>
                    </div>
                    <div className="show-form">
                        <form className="signIn" ref={signin} method='POST'>
                            <i class="fa-regular fa-user"> </i><input name='name' value={formData.name} type="text" placeholder='Input Username' onChange={handleForm} />
                            <i class="fa-solid fa-key"></i> <input name='password' value={formData.password} type="password" placeholder='Input Password' onChange={handleForm} />
                            <button type='submit' className='submit'>Sign In</button>

                        </form>
                        <div className='signUp' ref={signup}>
                            <form method='POST' onSubmit={(e) => submit(e)}>
                                <i class="fa-regular fa-user"></i> <input type="text" name='name' value={formData.name} placeholder='Input Name' onChange={handleForm} />
                                {/* <i class="fa-solid fa-phone"></i> <input name='phone' value={formData.phone} type="text" placeholder='Input Phone Number' onChange={handleForm} /> */}
                                <i class="fa-solid fa-envelope"></i>  <input name='email' value={formData.email} type="email" placeholder='Enter Email' onChange={handleForm} />
                                {/* <i class="fa-solid fa-key"></i><input name='password' value={formData.password} type="password" placeholder='Input Password' onChange={handleForm} /> */}
                                <button type='submit' className='submit'>Sign Up</button>
                                {
                                }
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn_SignUp