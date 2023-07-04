import react, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Shipping = () => {
    const [toggleShipping, toggleOrder, togglePayment] = useOutletContext();
    const navigate = useNavigate()
    const [shipping, setShipping] = useState(JSON.parse(localStorage.getItem('shipping')) || [])
    useEffect(() => {
        localStorage.setItem('shipping', JSON.stringify(shipping))
    }, [shipping])

    const handleForm = (e) => { setShipping(prev => ({ ...prev, [e.target.name]: e.target.value })) }

    return (
        <div>
            <form action="" className='shipping-form' >
                <h3>Shipping</h3>
                <div>
                    <label htmlFor="address">Address</label><br />
                    <input type="text" placeholder='Enter  your address' name='address' value={shipping.address} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="city">City</label><br />
                    <input type="text" placeholder='Enter  your city name' name='city' value={shipping.city} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label> <br />
                    <input type="text" placeholder="Enter  your city's postalCode " name='postalCode' value={shipping.postalCode} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="country">Country</label> <br />
                    <input type="text" placeholder='Enter  your country' name='country' value={shipping.country} onChange={handleForm} /><br />
                </div>
                <input type="submit" value="Continue" className='submit' onClick={(e) => { e.preventDefault(); navigate('/checkoutPage/payment'); togglePayment() }} />
            </form>
        </div>
    )
}

export default Shipping