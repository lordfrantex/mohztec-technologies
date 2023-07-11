import React, { useState, useEffect } from 'react'
const Contact = () => {

    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('contact')) || [])
    useEffect(() => {
        localStorage.setItem('contact', JSON.stringify(formData))
    }, [formData])

    const handleForm = (e) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })) }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Instead of logging to the console, i'll perform an emailJs integration.
        // console.log(formData);
    }
    return (
        <div className='main-form container-xxl'>

            <form action='' className="contact_container" onSubmit={(e) => handleSubmit(e)}>
                <div className="contact_form">
                    <h3>Send a Message</h3>
                    <p>* All fields are required.</p>
                    <div className="firstrow">
                        <div className="form">
                            <label htmlFor="name">Name: </label><br />
                            <input name='name' type="text" required value={formData.name} onChange={handleForm} />
                        </div>
                        <div className="form">
                            <label htmlFor="email"> Email: </label><br />
                            <input name='email' type="email" required value={formData.email} onChange={handleForm} />
                        </div>
                    </div>
                    <div className="firstrow">
                        <div className="form">
                            <label htmlFor="subject"> Subject: </label><br />
                            <input name='subject' type="text" required value={formData.subject} onChange={handleForm} />
                        </div>
                        <div className="form">
                            <label htmlFor="phone"> Phone: </label><br />
                            <input name='phone' type="text" required value={formData.phone} onChange={handleForm} />
                        </div>
                    </div>
                    <label htmlFor="Message">Message:</label>
                    <textarea className='message' required name="message" cols="30" rows="7"
                        placeholder="Write your message here..." value={formData.message} onChange={handleForm}></textarea>
                    <div className="contact-submit">
                        <button type="submit" >Send</button>
                    </div>

                </div>
                <div className="contact_details">
                    <div className="contact_info">
                        <h3>Contact Info</h3>
                        <div className="contacts">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State.</p>
                        </div>
                        <div className="contacts">
                            <i className="fa-solid fa-square-envelope"></i>
                            <p> lordfranktex@gmail.com </p>
                        </div>
                        <div className="contacts">
                            <i className="fa-solid fa-phone"></i>
                            <p>+2348102300105</p>
                        </div>
                        <div className="social-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.578698942828!2d5.149164414473121!3d7.2886804947392925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97ce47798d9b%3A0x426a4e9d0256165d!2sMohztec%20Technologies!5e0!3m2!1sen!2sng!4v1659522607947!5m2!1sen!2sng"
                            width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Contact