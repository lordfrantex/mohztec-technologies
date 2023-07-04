import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeItem, clearCart, increment, decrement, getTotal } from '../features/cart/CartSlice'
const img = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/D/112346_1614150591.jpg'
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { jwtToken, accountName } = JSON.parse(localStorage.getItem('accountName')) || ''

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])
    const { cartItems, amount } = useSelector(store => store.cart)

    const mapCart = cartItems.map(({ title, price, img, id, amount }) => {
        return (
            <div key={id}>
                <div className='cart-table'>
                    <div className="left-side">
                        <div className="cart-image">
                            <img src={img} alt="" />
                        </div>
                        <div className="cart-product">
                            <h4>{title}</h4>
                            <h6>Brand:Mohztec Technologies</h6>
                            <p>${price}</p>
                        </div>
                        <div className="cart-rating">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>


                    <div className="right-side">
                        <h4>${(amount * price).toFixed(2)}</h4>
                        <div className="cart-quantity">
                            <button onClick={() => dispatch(decrement(id))}><i class="fa-solid fa-minus"></i></button>
                            <p>{amount}</p>
                            <button onClick={() => dispatch(increment(id))}><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="remove" onClick={() => dispatch(removeItem({ id, amount, title }))}><i class="fa-solid fa-trash"></i></div>
                    </div>
                </div>

            </div>

        )
    })
    return (
        <>
            <div>{mapCart}</div>
            {cartItems.length > 0 && (
                <>
                    <button onClick={() => dispatch(clearCart())} className='clear-cart'>Clear Cart</button>
                    <div className="subtotal">
                        <div> <h4>Subtotal</h4><span>$ {(cart.CartTotalAmount).toFixed(2)}</span></div>
                        <p>Taxes and shipping fee is calculated at checkout</p>
                        <NavLink to={`${accountName ? '/checkoutPage' : '/account'}`} state={{ prevRoute: 'checkout' }} className='check-out-btn'> <button > <i className="fa-solid fa-bag-shopping"></i>Buy Now</button></NavLink>
                        <NavLink to='/product'><i className='fa-solid fa-arrow-left'></i>Continue Shopping</NavLink>

                    </div>
                </>)}

            {cartItems.length === 0 && (
                <>
                    <div style={{
                        margin: 'auto',
                        width: '50%',
                        textAlign: 'center'
                    }}>
                        <p>Your Cart is Currently Empty!!!</p>
                        <img src="/novelPics/cartPics.jpg" alt="" style={{
                            width: '40%'
                        }} />
                        <NavLink to="/product"><p><i className='fa-solid fa-arrow-left' style={{ marginRight: '10px' }}></i>Continue shopping</p></NavLink>
                    </div>
                </>

            )}
        </>
    )
}

export default Cart