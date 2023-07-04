import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation'
import "swiper/css/pagination";
import "../Styles/Product.css";
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination, } from "swiper";
import { Navigation } from 'swiper';
import FullServices from './FullServices';

const Testimonial = () => {
    return (
        <div>
            <div className='testimonial-title'>
                <h3>Customers Testimonials</h3>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                navigation

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="testimonial-container"
            >

                <SwiperSlide>
                    <div className="testimonial-swiper-wrapper">
                        <div className="testimonial-image">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </div>
                        <div className="testimonial-swiper-content">

                            <div className="comment">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci laudantium cumque fuga neque soluta quibusdam quis repellendus, veritatis recusandae vel ex qui non obcaecati illum quisquam! Ea blanditiis sed tempora laudantium expedita? Praesentium adipisci animi mollitia tenetur, veritatis qui?</p>
                            </div>
                            <div className="name">
                                <h3>Moses Okocha</h3>
                                <h4>CEO of Mohztec Technology</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-swiper-wrapper">
                        <div className="testimonial-image">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </div>
                        <div className="testimonial-swiper-content">

                            <div className="comment">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci laudantium cumque fuga neque soluta quibusdam quis repellendus, veritatis recusandae vel ex qui non obcaecati illum quisquam! Ea blanditiis sed tempora laudantium expedita? Praesentium adipisci animi mollitia tenetur, veritatis qui?</p>
                            </div>
                            <div className="name">
                                <h3>Moses Okocha</h3>
                                <h4>CEO of Mohztec Technology</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-swiper-wrapper">
                        <div className="testimonial-image">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </div>
                        <div className="testimonial-swiper-content">

                            <div className="comment">
                                <i class="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci laudantium cumque fuga neque soluta quibusdam quis repellendus, veritatis recusandae vel ex qui non obcaecati illum quisquam! Ea blanditiis sed tempora laudantium expedita? Praesentium adipisci animi mollitia tenetur, veritatis qui?</p>
                            </div>
                            <div className="name">
                                <h3>Moses Okocha</h3>
                                <h4>CEO of Mohztec Technology</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Testimonial