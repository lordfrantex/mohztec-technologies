import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MainProduct from '../Components/MainProduct'
import Title from '../Components/Title'

const ProductPage = () => {
    return (
        <div>
            <Header />
            <Title title='Products' />
            <MainProduct />
            <Footer />
        </div>
    )
}

export default ProductPage