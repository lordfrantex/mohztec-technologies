import React from 'react'
import data from '../features/cart/cartItem'
import { addToCart, clearCart, highToLow, LowToHigh, searchFilter, getCartItems, searchRecentViews } from '../features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Rating from './Rating'
import Pagination from './Pagination'
const MainProduct = () => {
    const navigate = useNavigate();
    // const recents = useSelector(state => state.cart.recentViews)
    const { productItem, isLoading, recents } = useSelector(state => state.cart)
    const [toggleCategory, setToggleCategory] = useState(true)
    function toggle() {
        setToggleCategory(toggle => !toggle)
    }
    const toggleStyle = toggleCategory ? 'toggleOff' : 'toggleOn'

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const searchText = (e) => {
        setSearch(e.target.value)
    }
    let dataSearch = productItem.length && productItem.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
    })


    const [previous, setPrevious] = useState([])
    const getPrevious = (item) => {
        setPrevious(prev => [...prev, item])
    }


    const mapPrevious = productItem.length && previous.map((item, index) => {
        return (

            <div class="recently-viewed" key={index}>
                <div class="viewed-details">
                    <div class="viewed-image"><img src={item.img} alt="" /></div>
                    <div class="viewed-info">
                        <Link to={`/product/${item.id}`}>{item.title}</Link>
                        <h3>${item.price}<span> <i class="fa-solid fa-circle-xmark"></i></span></h3>
                    </div>
                </div>


            </div>)
    }
    )

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(2)
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = productItem.length && dataSearch.slice(firstPostIndex, lastPostIndex)
    // useEffect(() => {
    //     dispatch(getCartItems())
    // }, [dispatch])

    if (isLoading) {
        return <div>
            <h1>Loadings...</h1>
        </div>
    }


    const renderData = productItem.length && currentPost.map((item, index) => {

        return (

            <div className="cart-item" key={index}>
                <div className="cart-item-image">
                    <p className='outOfStock'>Out of Stock</p>
                    <p className={`${item.quantityInCart < 1 ? 'show-outOfStock' : 'outOfStock'}`}>Out of Stock</p>
                    <img src={item.img} alt="" />
                </div>

                <Link to={`/product/${item.id}`} onClick={(e) => { getPrevious(item) }}>
                    <div className="name" >
                        <h3>{item.title}</h3>
                    </div>
                    <div className="price">
                        <h4>${item.price}</h4>
                    </div>
                </Link>
                {/* </div> */}


                <div className="cart-rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>(298)</span>
                </div>
                <ul className="cart-order">
                    <li class="cart-tooltip" onClick={() => { dispatch(addToCart(item)); }}>
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
            </div >
        )

    })


    return (
        <div className='overall-product'>

            <div class="product-search">
                <input type="text" placeholder="Search Product By Name" value={search} onChange={searchText.bind(this)} />
                <button class="submit-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div class="product-container">
                <div class="product-left">

                    <div class="product-category">
                        <h5>Filter Products by:</h5>
                        <ul className='filter-product'>
                            <li className='category'><span onClick={toggle}><i class="fa-regular fa-square"></i>Category <i class="fa-solid fa-caret-down"></i></span>
                                <ul className={toggleStyle}>
                                    <li><a href="#"> <i class="fa-regular fa-circle"></i>Cctv</a></li>
                                    <li><a href="#"> <i class="fa-regular fa-circle"></i>Solar</a></li>
                                    <li> <a href="#"> <i class="fa-regular fa-circle"></i>Electrical</a></li>
                                </ul>
                            </li>
                            <li onClick={() => dispatch(LowToHigh())}><i class="fa-regular fa-square"></i>Lowest to highest price</li>
                            <li onClick={() => dispatch(highToLow())}><i class="fa-regular fa-square"></i>Highest to lowest price</li>
                            <li><i class="fa-regular fa-square"></i>Include out of stock</li>
                            <li className='rating'>
                                <div>Rating : <Rating /></div>
                            </li>
                        </ul>

                    </div>
                    <div class="products">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Inverters</a></li>
                            <li><a href="#">Solar Panel</a></li>
                            <li><a href="#">Charge Controller</a></li>
                            <li><a href="#">Solar Generator</a></li>
                            <li><a href="#">Solar Accessories and Kits</a></li>
                            <li><a href="#">Solar Powered Devices</a></li>
                            <li><a href="#">Solar Cable</a></li>
                            <li><a href="#">Solar Generator</a></li>
                            <li><a href="#">Solar Charge Controller</a></li>
                            <li><a href="#">CCTV Surveillance Camera</a></li>
                            <li><a href="#">Surveillance Hard Disk</a></li>
                            <li><a href="#">Standalone Spy camera</a></li>


                        </ul>
                    </div>
                    <div>
                        <h3>Recently Viewed</h3>
                    </div>

                </div>

                <div className="product-right">
                    <div className="">
                        <div className="product-right-products">
                            {renderData}
                            {mapPrevious}
                        </div>

                        <Pagination totalPost={productItem.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />

                    </div>

                </div>

            </div>

        </div>
    )

}

export default MainProduct