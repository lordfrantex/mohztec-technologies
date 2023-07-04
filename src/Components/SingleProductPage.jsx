import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import data from '../features/cart/cartItem'
import { incrementSpecificProduct, decrementSpecificProduct, addToCart } from '../features/cart/CartSlice'
import Rating from './Rating'

function SingleDisplaySection() {

    const { jwtToken, accountName } = JSON.parse(localStorage.getItem('accountName')) || ''

    const datas = useSelector(state => state.cart.productItem)
    const dispatch = useDispatch()
    const { singleProductPage } = useParams()
    const checkId = datas.find(item => item.id === singleProductPage)
    const { price, title, img, id, amount } = checkId
    const pics = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/D/112346_1614150591.jpg'

    const [accordion, setAccordion] = useState(false)
    const [reviewAccordion, setReviewAccordion] = useState(false)

    function toggleDescriptionAccordion() {
        setAccordion(toggle => !toggle)
    }
    function toggleReviewAccordion() {
        setReviewAccordion(toggle => !toggle)
    }


    return (
        <div>

            <div className="main-component">

                <div className="left-section">
                    <div className="main-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="complementing-images">
                        <div className="first-complementing-image">
                            <img src={pics} alt="" />

                        </div>
                        <div className="first-complementing-image">
                            <img src={pics} alt="" />

                        </div>
                        <div className="first-complementing-image">
                            <img src={pics} alt="" />

                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <h3 className='name'>{title}</h3>
                    <p className='brand'>Brand: Mohztec Technologies</p>
                    <h2 className='price'>${price}</h2>
                    <h2 className='category'>Category: CCTV surveillance and security.</h2>
                    {/* <CartQty /> */}
                    <div className="cart-quantity">
                        <button onClick={() => dispatch(decrementSpecificProduct({ id, amount }))}><i class="fa-solid fa-minus"></i></button>
                        <p>{amount}</p>
                        <button onClick={() => dispatch(incrementSpecificProduct({ id, amount }))}><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="call-to-action">
                        <Link to={`${accountName ? '/checkout' : '/account'}`} state={{ prevRoute: 'checkout' }}> <button className="buy-now"> <i className="fa-solid fa-bag-shopping"></i>Buy Now</button></Link>
                        <button className="cart" onClick={() => dispatch(addToCart({ id, amount, title }))}> <i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                        <button className="wishlist"> <i class="fa-brands fa-gratipay"></i>Add to Wishlist</button>
                    </div>
                    <div className="accordion">
                        <div class="accordion-description">
                            <div className="accordion-title" onClick={toggleDescriptionAccordion}>
                                <h4>Description</h4>
                                <button id='toggle-btn'>{accordion ? '-' : '+'}</button>
                            </div>
                            <div className={` description-accordion-content ${accordion && 'openup'}`}>
                                <p>Lorem ipsum dolor natus qui quis perspiciatis alias adipisci quam ab suscipit minima, voluptas unde numquam et. Rem.</p>
                                <ul>
                                    <li >It accomodates enough heat</li>
                                    <li>It accomodates enough heat</li>
                                    <li>It accomodates enough heat</li>
                                    <li>It accomodates enough heat</li>
                                </ul>
                            </div>
                        </div>
                        <div className="accordion-review"  >
                            <div className="accordion-title" onClick={toggleReviewAccordion}>
                                <h4>Review (0)</h4>
                                <button id='toggle-btn'>{reviewAccordion ? '-' : '+'}</button>

                            </div>
                            <form className={`review-accordion-content ${reviewAccordion && 'openup'}`}>
                                <h4>Reviews</h4>
                                <p>No review yet</p>
                                <p>Be the first to review Mohztec's Echo Dot.</p>
                                <p>Your email address will not be published. Required fields are marked *</p>

                                <div className="rating-container">
                                    <label htmlFor="rating">Your rating *:</label>
                                    <div className="rating"><Rating /> </div>
                                </div>
                                <div className="review-container">
                                    <div className="reviews">
                                        <label htmlFor="review">Your Reviews *:</label>
                                        <textarea class="review" id="" cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="review-name">
                                        <label htmlFor="name">Name *:</label>
                                        <input type="text" placeholder='Input your Name' />
                                    </div>
                                    <div className="email">

                                        <label htmlFor="name">Email *:</label>
                                        <input type="email" placeholder='Input your Email' required />
                                    </div>
                                    <div className="submit"><button>Submit</button></div>
                                </div>
                            </form>
                        </div>
                        <div className="share">
                            <span>Share</span>
                            <div className="social-icons">
                                <i class="fa-brands fa-whatsapp"></i>
                                <i class="fa-brands fa-pinterest"></i>
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-telegram"></i>
                                <i class="fa-brands fa-twitter"></i>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Rating />
        </div>
    )
}

export default SingleDisplaySection
