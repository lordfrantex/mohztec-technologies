import React from 'react'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Footer from '../Components/Footer'


const ContactPage = () => {
    return (
        <div>
            <Header />
            <Title title="Contact Us" />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage