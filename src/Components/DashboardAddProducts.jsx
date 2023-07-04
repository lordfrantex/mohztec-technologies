import react, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
const DashboardAddProducts = () => {
    const navigate = useNavigate()
    const [shipping, setShipping] = useState(JSON.parse(localStorage.getItem('shipping')) || [])
    useEffect(() => {
        localStorage.setItem('shipping', JSON.stringify(shipping))
    }, [shipping])

    const handleForm = (e) => { setShipping(prev => ({ ...prev, [e.target.name]: e.target.value })) }
    return (
        <div>
            <form action="" className='shipping-form'>
                <h3>Add Product</h3>
                <div>
                    <label htmlFor="address">Name</label><br />
                    <input type="text" placeholder='Enter  product name' name='name' value={shipping.name} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="address">Price</label><br />
                    <input type="text" placeholder='Enter  product price' name='price' value={shipping.price} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="city">Image:</label>
                    <input style={{ border: 'none' }} type="file" />
                </div>
                <div>
                    <label htmlFor="countInStock">Count in Stock:</label> <br />
                    <input type="text" placeholder="Enter  count in stock " name='countInStock' value={shipping.countInStock} onChange={handleForm} /><br />
                </div>
                <div >
                    <label htmlFor="country">Description:</label> <br />
                    <textarea name="description" value={shipping.description} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                </div>
                <input type="submit" value="Continue" className='submit' onClick={() => { navigate('/checkoutPage/payment'); }} />
            </form>
        </div>
    )
}

export default DashboardAddProducts