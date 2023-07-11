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
        <div className='container-xxl'>
            <div class="product  col-md-5  ">
                <h3 className='bg-primary rounded-pill p-3'>Our Products</h3>
                <h4>Quality Solar Power Products that provides <span>Lasting Solution for steady Electricity</span></h4>
                <h5 className='display-5  '>Get our products at affordable prices.</h5>
            </div>
            <div className="cart-wrapper">
                {renderData}
            </div>
            <div class="text-center py-3">
                <button className='bg-dark btn p-3 rounded '><Link to='/product'> <span className='text-light' > View All Products</span></Link> </button>
            </div>
        </div >
    )
}

export default HomeProduct