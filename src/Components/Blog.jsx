import '../Styles/blog.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/autoplay';


// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, EffectFlip, Navigation, Autoplay } from "swiper";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {

    const data = [
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'YwerP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'AwerP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'XwerP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'LwerP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'HwerP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
        {
            img: '/novelPics/solar3.jpg',
            title: 'Effect of using solar based equipments',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
            Porro veritatis necessitatibus consectetur alias numquam
            quod, asperiores fuga. Consequatur fugit et hic, unde quaerat
            voluptate quas nihil cumque officia magnam autem reiciendis
            distinctio magni, accusamus quam dicta! Ea nisi quae doloribus
            molestiae reiciendis placeat officiis et sequi. Sunt aliquid
            architecto consectetur`,
            id: 'werP409YTRqMlop0',
            postedAt: '12 December 2022',
            author: 'Lord Frantex'
        },
    ]
    const blogs = (
        data.map(({ img, title, description, id, postedAt, author }, index) => {
            return (
                <div className="blog-card">
                    <img src={img} alt="" />
                    <h4><strong>{title}</strong></h4>
                    <strong className='posted-at'>{postedAt}</strong><strong className='author'>By {author}</strong>
                    <p>{description}</p>
                    <NavLink to={`/blog/${id}`}> <button>Read More</button></NavLink>
                    {/* <span>Comment</span> */}
                </div>
            )
        })

    )
    return (
        <div>

            <Header />
            <div className="blog-header">
                <div className="">
                    <h3>Welcome to our
                        <span style={{ marginLeft: '10px' }}>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                delaySpeed={4000}
                                deleteSpeed={100}
                                words={['blog', 'archive', 'bookstore']}
                            />

                        </span> </h3>
                    <p>Feed your mind with tech information...</p>
                </div>
            </div>
            <div className="blog-filter">
                <div className="blog-search">
                    <input type="text" placeholder='Search for blogs' />
                    <i className="fa-solid fa-search"></i>
                </div>
                <select name="" id="">
                    <option value="">Sort By</option>
                    <option value="">Recent Posts</option>
                    <option value="">Solar</option>
                    <option value="">CCTV</option>
                    <option value="">Electrical</option>
                    <option value="">IoT/ Home automation</option>
                </select>
            </div>

            <div className="blog-posts">
                {blogs}

            </div>

            <div className='blog-swiper'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="technology">

                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                </Swiper>
                <div className="tech-writeup">
                    <h4>Technology</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error aspernatur itaque,
                        consequatur pariatur dolorem mollitia. Ipsa minus pariatur in ad aut! Temporibus corrupti
                        nisi atque tenetur incidunt, obcaecati iste?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error aspernatur itaque,
                        consequatur pariatur dolorem mollitia. Ipsa minus pariatur in ad aut! Temporibus corrupti
                        nisi atque tenetur incidunt, obcaecati iste?</p>
                    <div className="tech-icons">
                        <p style={{ marginBottom: 0 }}><strong> Follow us via </strong></p>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}

export default Blog