import React from 'react'
import { Link } from 'react-router-dom'
const PartServices = () => {
    const img = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/D/112346_1614150591.jpg'


    const data = [
        {
            image: img,
            title: 'CCTV Installation',
            description: '(Lorem ipsum dolorvoluptatem aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',
        },
        {
            image: img,
            title: 'SOLAR Installation',
            description: '(Lorem ipsum dolor aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',
        },
        {
            image: img,
            title: 'ELECTRICAL Installation',
            description: '(Lorem ipsum dolor, aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',
        },
        {
            image: img,
            title: 'INVERTER CONSTRUCTION',
            description: '(Lorem ipsum dolor, aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',
        },
        {
            image: img,
            title: 'HOME AUTOMATION / IoT',
            description: '(Lorem ipsum dolor Cum iusto exceptur voluptatem aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',
        },
    ]

    const renderData = data.map((item, index) => {
        return (
            <div class="deals product-icon" key={index}>
                <img src={item.image} alt="" />
                <div class="descriptions product-row">
                    <h4>{item.title}</h4>
                    <p class="row-text">{item.description}</p>

                </div>
            </div>
        )
    }
    )

    return (
        <div >

            <div class="product">
                <a href="#">Our Services</a>
                <h4>We render quality services
                </h4>
                <h6>Take a tour through services we render.</h6>
            </div>

            <div class="deals-row ">
                {renderData}
            </div>
            <div class="service-button">
                <Link to="/services">View All Services</Link>
            </div>

            <div class="about-us">
                <h2><a href="#">About us</a></h2>
                <div class="about-container">
                    <div class="about-text-block">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia cum itaque vitae necessitatibus
                            recusandae nemo! Ratione eveniet doloremque soluta nam eos ipsum magni provident velit earum
                            culpa similique esse, alias rem recusandae incidunt voluptate a nemo molestias ex qui,
                            temporibus, optio ut iste quisquam. Officiis non repudiandae excepturi facere illum?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia cum itaque vitae
                            necessitatibus
                            recusandae nemo! Ratione eveniet doloremque soluta nam eos ipsum magni provident velit earum
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="/novelPics/solar1.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PartServices