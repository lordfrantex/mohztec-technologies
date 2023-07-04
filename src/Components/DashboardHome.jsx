import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const DashboardHome = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>

            <h4 style={{ marginLeft: '130px', padding: '1px' }}>Dashboard</h4>
            <div className="main-dashboard">
                <div className="main-dashboard-top">
                    <div className="total">
                        <div className="dashboard-image">
                            <img src="/novelPics/sales.png" alt="" />
                        </div>
                        <div className='sales-info'>
                            <p>Total Sales</p>
                            <p>$123.4</p>
                        </div>
                    </div>
                    <div className="total">
                        <div className="dashboard-image">
                            <img src="/novelPics/order.png" alt="" />
                        </div>
                        <div className='sales-info'>
                            <p>Total Orders</p>
                            <p>12</p>
                        </div>
                    </div>
                    <div className="total">
                        <div className="dashboard-image">
                            <img src="/novelPics/cart.png" alt="" />
                        </div>
                        <div className='sales-info'>
                            <p>Total Products</p>
                            <p>34</p>
                        </div>
                    </div>

                </div>
                <div className="main-dashboard-bottom">
                    <div className="sales-statistics">
                        <p>Sales Statistics</p>
                    </div>
                    <div className="product-statistics">
                        <p>Product Statistics</p>
                    </div>
                </div>
                <table className='customers'>
                    <h5>Latest Orders</h5>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                    <tr className='recent-order'>
                        <td>Adams</td>
                        <td>adamsokonka@gmail.com</td>
                        <td>$300.78</td>
                        <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>

                        <td>01/10/2022</td>
                        <td><button>Details</button></td>
                    </tr>
                    <tr className='recent-order'>
                        <td>Adams</td>
                        <td>adamsokonka@gmail.com</td>
                        <td>$300.78</td>
                        <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>

                        <td>01/10/2022</td>
                        <td><button>Details</button></td>
                    </tr>
                    <tr className='recent-order'>
                        <td>Adams</td>
                        <td>adamsokonka@gmail.com</td>
                        <td>$300.78</td>
                        <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>
                        <td>01/10/2022</td>
                        <td><button>Details</button></td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default DashboardHome