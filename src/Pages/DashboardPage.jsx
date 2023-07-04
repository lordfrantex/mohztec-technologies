import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const DashboardPage = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <div className="dashboard-header" >
                <div className="dashboard-search">
                    <input type="search" name="" id="" placeholder='Search Item' />
                    <span> <i className='fa-solid fa-search'></i> </span>
                </div>
                <i class="fa-solid fa-user"></i>
            </div>
            <nav className="dashboard-nav" style={{
                width: toggle ? '55px' : '200px'
            }}>
                <ul className='dashboard-list'>


                    <li onClick={() => setToggle(prev => !prev)}><NavLink to="#">
                        <i class="fa-solid fa-bars"></i>
                    </NavLink></li>
                    <li>
                        <div className="boa">
                            <NavLink to='#'>
                                <img src="novelPics/mohztec_logo2.jpg" alt="" />
                            </NavLink>
                        </div>

                    </li>
                    <li><NavLink to="/dashboardPage">
                        <i className="fa solid fa-home"></i><span className="nav-item">Dashboard</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardOrder">
                        <i class="fa-solid fa-arrow-up-wide-short"></i><span className="nav-item">Orders</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardProduct">
                        <i class="fa-solid fa-bag-shopping"> </i><span className="nav-item">Products</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardAddProducts" className='add-prod'>
                        <i className="fa solid fa-shopping-cart"></i><span className="nav-item">Add Product</span>
                    </NavLink></li>

                    <li><NavLink to="dashboardBlog">
                        <i class="fa-solid fa-pen"></i><span className="nav-item">Blogs</span>
                    </NavLink></li>

                    <li><NavLink to="dashboardCourse">
                        <i class="fa-solid fa-book"></i><span className="nav-item">Courses</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardProject">
                        <i class="fa-solid fa-plug-circle-check"></i><span className="nav-item">Projects</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardTransactions">
                        <i class="fa-solid fa-money-check-dollar"></i><span className="nav-item">Transactions</span>
                    </NavLink></li>
                    <li><NavLink to="dashboardUser">
                        <i class="fa-solid fa-users"></i><span className="nav-item">Users</span>
                    </NavLink></li>
                    <li className='logout'><NavLink to="#">
                        <i class="fa-solid fa-right-from-bracket"></i><span className="nav-item">Logout</span>
                    </NavLink></li>


                </ul>
            </nav>
            <div className="" style={{ marginLeft: toggle ? '50px' : '210px', transition: '.6s' }}>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardPage