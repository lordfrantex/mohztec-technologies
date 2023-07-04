import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
const DashboardProduct = () => {
    const navigate = useNavigate()

    const data = [
        {
            img: "/novelPics/solar1.jpg",
            name: "Mohztec's Solar Cable",
            price: "45.00",
            id: 1,
        },
        {
            img: "/novelPics/solar1.jpg",
            name: "Mohztec's Solar Stand",
            price: "45.00",
            id: 2,
        },
        {
            img: "/novelPics/solar1.jpg",
            name: "Mohztec's IoT System",
            price: "45.00",
            id: 3,
        },
        {
            img: "/novelPics/solar1.jpg",
            name: "Mohztec's Solar panel",
            price: "45.00",
            id: 4,
        },
        {
            img: "/novelPics/solar1.jpg",
            name: "Mohztec's Solar Charge controller",
            price: "45.00",
            id: 5,
        },
    ]



    const display = data.map(({ img, name, price, id }, index) => {
        return (
            <div className="dashboard-unit-product" key={index}>
                <img src={img} alt="" style={{ width: '100%' }} />
                <p style={{ padding: '0 10px', marginBottom: '0' }}>{name}</p>
                <strong style={{ padding: '0 10px' }}>${price}</strong>
                <div className="" style={{ display: 'flex', gap: '5px', padding: '10px' }}>
                    <button style={{ flex: 1 }}> <NavLink to={`/dashboardPage/dashboardProduct/${id}`}>Edit</NavLink></button>
                    <button style={{ flex: 1 }}>Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="" style={{ padding: '10px 20px' }}>
                <span>Products</span>
                <button onClick={() => navigate('/dashboardPage/dashboardAddProducts')} style={{
                    float: 'right', padding: '5px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: 'orange',
                    color: 'white'
                }}>Create Product</button>
            </div>
            <div className="dashboard-product-container">
                <div className="dashboard-product-filter">
                    <input type="search" id="" placeholder='Search Products' />
                    <select>
                        <option value="">Select Categories</option>
                        <option value="">Solar</option>
                        <option value="">CCTV</option>
                        <option value="">Electricals</option>
                        <option value="">IoT</option>
                        <option value="">Automatic Doors</option>
                    </select>

                </div>
                <div className="dashboard-product" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {display}
                </div>

            </div>
        </div>
    )
}

export default DashboardProduct