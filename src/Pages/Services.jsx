import React from 'react'
import Footer from '../Components/Footer'
import FullServices from '../Components/FullServices'
import Header from '../Components/Header'
import Title from '../Components/Title'
import ProtectedRoute from './ProtectedRoute'
const Services = () => {
    return (
        <div>
            <Header />
            <Title title="Services" />
            <FullServices />
            <ProtectedRoute />
            <Footer />
        </div>
    )
}

export default Services