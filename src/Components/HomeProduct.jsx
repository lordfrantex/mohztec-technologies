import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../features/cart/cartItem'
import '../Styles/Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, getCartItems } from '../features/cart/CartSlice'

const img = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/D/112346_1614150591.jpg'


const HomeProduct = () => {
    const dispatch = useDispatch()
    const { productItem, isLoading } = useSelector(store => store.cart)


    // useEffect(() => {
    //     const item = async () =>
    //         await dispatch(getCartItems())
    // }, [])
    if (isLoading) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }
    const renderData = productItem.length && productItem.map((item, index) => {
        return (
            <div className="cart-item" key={index}>
                <div className="cart-item-image">
                    <img src={item.img} alt="" />
                </div>
                <Link to={`/product/${item.id}`}>
                    <div className="name">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="price">
                        <h4>{item.price}</h4>
                    </div>
                </Link>
                <div className="cart-rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>(298)</span>
                </div>
                <ul className="cart-order">
                    <li class="cart-tooltip" onClick={() => dispatch(addToCart(item))}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="tooltiptext">Add to Cart</span>
                    </li>
                    <li class="cart-tooltip">
                        <i class="fa-brands fa-gratipay"></i>
                        <span class="tooltiptext">Add to Wishlist</span>
                    </li>
                    <li class="cart-tooltip">
                        <i class="fa-solid fa-circle-notch"></i>
                        <span class="tooltiptext">Compare</span>
                    </li>
                    <li class="cart-tooltip">
                        <i class="fa-solid fa-eye"></i>
                        <span class="tooltiptext">Quick View</span>
                    </li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            <div class="product">
                <a href="#">Our Products</a>
                <h4>Quality Solar Power Products that provides <span>Lasting Solution for steady Electricity</span></h4>
                <h6>HOTTEST DEALS OF THE DAY!!!!</h6>
            </div>
            <div className="cart-wrapper">
                {renderData}
            </div>
            <div class="product-button">
                <Link to="/product">View All Products</Link>
            </div></div>
    )
}

export default HomeProduct