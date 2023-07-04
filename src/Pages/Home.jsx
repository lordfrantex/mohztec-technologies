import React from 'react'
import Header from '../Components/Header'
import ScrollBar from '../Components/ScrollBar'
import Display from '../Components/Display'
import HomeProduct from '../Components/HomeProduct'
import PartServices from '../Components/PartServices'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import ShowBar from '../Components/ShowBar'

const Index = () => {
    return (
        <div>
            <Header />
            <ScrollBar />
            <Display />
            <HomeProduct />
            <PartServices />
            <ShowBar />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Index