import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faBoltLightning, faCamera, faCameraAlt, faCameraRetro, faChartColumn, faCheck, faDashboard, faFileWaveform, faGlobeAfrica, faPhoneSquare, faSignal, faSignal5, faSolarPanel, faThunderstorm, faUsersGear, faVideoCamera, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
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
            description: '(Lorem ipsum dolor, aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',

        },
        {
            image: img,
            title: 'HOME AUTOMATION / IoT',
            description: '(Lorem ipsum dolor, aliquam vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa dicta sunt eius vel! Et sequi culpa .)',

        },
    ]

    const renderData = data.map((item, index) => {
        return (
            <div className="col">
                <div class="card" key={index}>

                    <div className="">
                        <img src={item.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text"> {item.description}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    )

    return (
        <>
            <div className='container-xxl mt-5'>
                <div className="">
                    <div class="col-md-5 text-center  m-auto mt-3 container">
                        <h3 className='p-3 mb-5 rounded-pill bg-primary d-inline-block'>Our Services</h3>
                        <h4>We Render High Quality Services
                        </h4>
                    </div>

                    <div class="container  ">

                        <div className="row g-3">
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12 ">
                                <div className="services border-end d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faSolarPanel} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>Solar Installation</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                                <div className="services border-end d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faVideoCamera} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>CCTV Installation</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                                <div className="services d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faGlobeAfrica} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>IoT Installation</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                                <div className="services border-end  d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faBoltLightning} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>Electrical Installation</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                                <div className="services border-end d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faUsersGear} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>Training</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 col-12">
                                <div className="services  d-flex gap-2">
                                    <div className=" thumbnail ">
                                        <div className="pt-3">
                                            <FontAwesomeIcon icon={faChartColumn} fontSize='45px' />
                                        </div>
                                    </div>
                                    <div className="service-details">
                                        <h4 className='align-right'>Sales of Materials</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae ipsam rerum iste
                                            dolor culpa! Sapiente illum modi unde. Voluptas!</p>
                                        <span className='d-block'>
                                            <Link to="/services">
                                                <span className="round   me-3">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className=''>Read More</span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                    {/* <div class="service-button">
                        <Link to="/services">View All Services</Link>
                    </div> */}
                    <div className="container-xxl my-5 py-3 about-container">
                        <div class="col-md-5 text-center m-auto">
                            <h3 className='p-3  rounded-pill bg-primary d-inline-block'>About Us</h3>
                        </div>
                        <section className="container-fluid">
                            <div className="container-xl">
                                <div className="row g-5">
                                    <div className="col-lg-6">
                                        <div className="p-4">
                                            <p className='display-6'>About Mohztec Technologies</p>
                                            <h2 className='h1'>We provide top notch technological innovations in town.</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure recusandae et quibusdam repellendus adipisci nesciunt sit fuga mollitia quod, amet molestiae quis,
                                                placeat aperiam ipsum soluta voluptas iste cum velit.</p>
                                            <div className="row mt-5 credible-points">
                                                <div className="col-lg-6">
                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>24/7 Call Services Available</span>
                                                    </div>
                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>Competent Consultants Available</span>
                                                    </div>
                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>Technological Innovations</span>
                                                    </div>

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>Professional Services</span>
                                                    </div>

                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>Best Business Offers</span>
                                                    </div>
                                                    <div className='d-flex align-items-center my-2  gap-2'>
                                                        <span className='round'><FontAwesomeIcon icon={faCheck} /></span>
                                                        <span>Best Customers Services and Relations</span>
                                                    </div>
                                                </div>
                                                <div className="  row g-2 mt-4 p-3">
                                                    <div className="col-12 col-lg-6 ">

                                                        <div className=" d-flex gap-2 avater align-items-center ">
                                                            <img src="/novelPics/man1.jpg" className='side-image' alt="" />
                                                            <div className="mt-1">
                                                                <h4 className='p-0 m-0'>Moses Okocha</h4>
                                                                <p>CEO & Founder</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-6 ">

                                                        <div className=" d-flex gap-2 avater align-items-center ">
                                                            {/* <img src="/novelPics/man1.jpg" className='side-image' alt="" /> */}
                                                            <div className="home-phone-complement-color">
                                                                <FontAwesomeIcon icon={faPhoneSquare} fontSize='50px' />
                                                            </div>
                                                            <div className="mt-1">
                                                                <h6 className='p-0 m-0'>Call us anytime</h6>
                                                                <p>+234 8102300105</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 parent-experience">
                                        <div className="home-about-image">
                                            <img src="/novelPics/people-1.png" width='100%' alt="" />

                                            <img src="/novelPics/man1.jpg" className='side-image' alt="" />
                                        </div>


                                        <div className=" d-flex align-items-center gap-4  justify-content-between py-2 px-4 bg-dark text-white rounded-pill experience">
                                            <div className="">
                                                <h2 className='p-0 m-0'>3+ </h2>
                                                <p>Years</p>
                                            </div>
                                            <div className="">
                                                <p>Of experience in technological innovations</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </section>

                        <section class=" container-xxl meet-ceo mt-5">
                            <div className="row g-3 justify-content-center align-items-center">
                                <div className="col-md-5">
                                    <div class="about-text-block p-4 ">
                                        <h2>Meet our C.E.O</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia cum itaque vitae necessitatibus
                                            recusandae nemo! Ratione eveniet doloremque soluta nam eos ipsum magni provident velit earum
                                            culpa similique esse, alias rem recusandae incidunt voluptate a nemo molestias ex qui,
                                            temporibus, optio ut iste quisquam. Officiis non repudiandae excepturi facere illum?
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia cum itaque vitae
                                            necessitatibus
                                            recusandae nemo! Ratione eveniet doloremque soluta nam eos ipsum magni provident velit earum
                                        </p>
                                        <strong>Mr. Moses Okocha</strong>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div class="about-image m-auto ">
                                        <img src="/novelPics/moses.jpg" width='100%' alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="home-training-container container-fluid">
                        <div className="col-md-6 m-auto mb-4 text-center ">
                            <h3>Explore our picture gallery</h3>
                            <p className='display-6 '>Mohztec technologies presents you with the latest technological approach. Browse our collections</p>
                        </div>
                        <div className="container-xxl">

                            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-solar-installation-tab" data-bs-toggle="pill" data-bs-target="#pills-solar-installation" type="button" role="tab" aria-controls="pills-solar-installation" aria-selected="true">Solar Installations</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-interior-decoration-tab" data-bs-toggle="pill" data-bs-target="#pills-interior-decoration" type="button" role="tab" aria-controls="pills-interior-decoration" aria-selected="false">Interior Decorations</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-cctv-installation-tab" data-bs-toggle="pill" data-bs-target="#pills-cctv-installation" type="button" role="tab" aria-controls="pills-cctv-installation" aria-selected="false">CCTV Installations</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-electrical-installation-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-electrical-installation" type="button" role="tab" aria-controls="pills-electrical-installation" aria-selected="false">Electrical Installations</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-Iot-installation-tab" data-bs-toggle="pill" data-bs-target="#pills-Iot-installation" type="button" role="tab" aria-controls="pills-Iot-installation" aria-selected="false">IoT Installations</button>
                                </li>

                            </ul>
                            <div className="tab-content " id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-solar-installation" role="tabpanel" aria-labelledby="pills-solar-installation-tab">
                                    <div className="container-fluid">
                                        <div className="row g-3 p-3">
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-interior-decoration" role="tabpanel" aria-labelledby="pills-interior-decoration-tab">
                                    <div className="container-fluid">
                                        <div className="row g-3 p-3">
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-cctv-installation" role="tabpanel" aria-labelledby="pills-cctv-installation-tab">
                                    <div className="container-fluid">
                                        <div className="row g-3 p-3">
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-electrical-installation" role="tabpanel" aria-labelledby="pills-electrical-installation-tab">
                                    <div className="container-fluid">
                                        <div className="row g-3 p-3">
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-Iot-installation" role="tabpanel" aria-labelledby="pills-Iot-installation-tab">
                                    <div className="container-fluid">
                                        <div className="row g-3 p-3">
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 ">
                                                <div className=" border">
                                                    <img src="/novelPics/man1.jpg" width='100%' className='' alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>

    )
}

export default PartServices