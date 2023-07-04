import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../Styles/Display.css'

const Display = () => {
    const img = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/D/112346_1614150591.jpg'

    return (

        <Swiper modules={[Navigation, Pagination, A11y, Autoplay]}
            centeredSlides={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            grabCursor={true}
            loop={true}
            // scrollbar={{ draggable: true }}
            className='display-container'
        >


            <SwiperSlide>

                <div className="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper-content">
                            <div class="swipe">
                                <h1>Solar power system for homes, offices, Get uninterrupted power supply now.</h1>
                                <div class="enquiry">
                                    <a href="#" class="enquirybutton">Make Enquiry</a>
                                    <a href="#" class="enquirybutton">Get Quotation</a>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="/novelPics/solar1.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper-content">
                            <div class="swipe">
                                <h1>Solar power system for homes, offices, Get uninterrupted power supply now.</h1>
                                <div class="enquiry">
                                    <a href="#" class="enquirybutton">Make Enquiry</a>
                                    <a href="#" class="enquirybutton">Get Quotation</a>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="/novelPics/solar1.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper-content">
                            <div class="swipe">
                                <h1>Solar power system for homes, offices, Get uninterrupted power supply now.</h1>
                                <div class="enquiry">
                                    <a href="#" class="enquirybutton">Make Enquiry</a>
                                    <a href="#" class="enquirybutton">Get Quotation</a>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="/novelPics/solar1.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        </Swiper>
    )
}

export default Display