import React from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'

const Order = () => {
    const shipping = JSON.parse(localStorage.getItem('shipping'))
    const { cartItems } = useSelector(store => store.cart)

    const mapCartItem = cartItems.map(({ title, id, price, amount, img }, index) => {
        return (
            <div className="order-item" style={{
                border: '1px solid red',
                padding: '10px',
                borderRadius: '10px',
                margin: '5px 20px',

            }}>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        height: '100px',
                        width: '100px',
                        display: 'inline-block'
                    }}> <img src={img} alt="" style={{ width: '100%' }} />
                    </div>



                    <div className="" style={{ display: 'inline-block', marginLeft: '10px' }}>
                        <p >{title}</p>
                        <span>Qty: {amount}</span>
                    </div>
                    <span style={{ marginLeft: 'auto', fontSize: '20px' }}>${price}</span>

                </div>

            </div>
        )
    })





    return (
        <div style={{ display: 'flex', }}>
            <div className='' style={{ flex: '80%' }}>
                <div className="shipping-address" style={{
                    border: '1px solid red',
                    borderRadius: '10px',
                    margin: '10px 20px',
                    padding: '15px 10px',
                }}>
                    <h4>Shipping Address</h4>
                    <p>{shipping ? shipping.address : ' '}</p>
                </div>
                <div className="shipping-address" style={{
                    border: '1px solid red',
                    borderRadius: '10px',
                    margin: '10px 20px',
                    padding: '15px 10px',
                    clear: 'both'
                }}>
                    <h4>Payment Method</h4>
                    <p>Flutterwave</p>
                </div>
                <div className="" style={{ margin: '30px 20px 10px 20px' }}>
                    <h4 style={{ display: 'inline' }}>Order Items</h4>
                    <strong style={{ float: 'right' }}>Price</strong>
                </div>
                {mapCartItem}


            </div>
            <div className="" style={{ flex: '20%', border: '1px solid red', height: 'fit-content', padding: '10px', marginRight: '18px', borderRadius: '10px' }}>
                <button type="submit"
                    style={{
                        width: '100%',
                        border: 'none',
                        marginBottom: '18px',
                        padding: '4px',
                        outline: 'none',
                        color: 'white',
                        backgroundColor: 'orange',
                        borderRadius: '4px'
                        // implement a function such that when you click, it copies shipping, payment and orders information from local-storage to backend (i.e dashboard) and it links you to flutterwave interface.

                    }}>Place Order</button>
                <h4>Order Summary</h4>

                <table>
                    <tr>
                        <td>Items: </td>
                        <td>$195</td>
                    </tr>
                    <tr>
                        <td>Shipping: </td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Tax: </td>
                        <td>$29.5</td>

                    </tr>
                    <tr>
                        <td> <strong> Order Total: </strong></td>
                        <td style={{ padding: ' 6px 10px' }}> <strong> $229.54 </strong></td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Order