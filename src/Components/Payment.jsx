import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
const Payment = () => {
    const navigate = useNavigate()
    const [toggleShipping, toggleOrder, togglePayment] = useOutletContext()
    return (
        <div style={{
            border: '1px solid red',
            width: '30%',
            margin: 'auto',
            padding: '10px',
            borderRadius: '7px'

        }}>
            <h4 style={{ marginBottom: '30px' }}>Payment</h4>
            <div className="">
                <div className="" style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}>
                    <img src="/novelPics/download(2).png" alt="" style={{ width: '100%' }} />
                </div>
                <p style={{ display: 'inline-block', marginLeft: '4px' }}>Flutterwave</p>
            </div>
            <input onClick={(e) => { e.preventDefault(); navigate('/checkoutPage/order'); toggleOrder() }} type="submit" value="Continue" style={{
                width: '100%',
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                padding: '4px',
                borderRadius: '7px',
                margin: '10px 0'
            }} />
        </div>
    )
}

export default Payment