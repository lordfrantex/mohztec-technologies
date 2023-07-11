import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/css/about.css'


const About = () => {
    return (
        <div className='container-xxl'>

            <div class="about-section container m-auto my-3">
                <div class="inner-section ">
                    <h3>About Us</h3>
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt enim esse magnam minus nobis
                        obcaecati earum nam placeat. Excepturi, officiis dolore quos commodi saepe error aut architecto
                        dicta maiores.</p>
                    <div class="achievements">
                        <h4>Our Achievements</h4>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>
                        <li><i class="fa-solid fa-check-double"></i> Trained Personnell</li>

                    </div>
                    <div class="social-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>

                </div>
            </div>
            <div class="container my-5">

                <div className="row g-5 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div class="mission p-4 text-center rounded-5">
                            <i class="fa-solid fa-pen-nib"></i>
                            <h4 className='fw-bold'>Mission</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur temporibus animi sunt
                                facere,
                                quidem cum optio ex exercitationem numquam, iste eos doloribus, a magni?</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div class="vision p-4 text-center rounded-5">
                            <i class="fa-solid fa-eye"></i>
                            <h4 className='fw-bold'>Vision</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur temporibus animi sunt
                                facere,
                                quidem cum optio ex exercitationem numquam, iste eos doloribus, a magni?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 m-auto">
                <div class="choose_us p-3">
                    <h2 className='text-center'>Why Choose Us?</h2>
                    <i class="fa-solid fa-anchor d-block text-center "></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga optio quae ducimus cumque consectetur
                        sequi, quo voluptatibus quaerat et voluptates officiis dolor explicabo iure deserunt quidem soluta. Delectus
                        laboriosam iusto magnam numquam, dolorum amet debitis quam dolore totam aliquid eaque, tempore ea autem.
                        Animi maxime in harum vero sed fugit ut suscipit dolores quos distinctio nostrum, earum tempore ducimus
                        minima incidunt ea blanditiis optio quasi voluptas molestiae aperiam! Qui fuga non dignissimos, recusandae
                        doloribus nostrum quae et ullam magnam excepturi tenetur reiciendis molestias. Sequi accusamus cupiditate
                        optio, quo ipsa quia at quibusdam similique  debitis! Est sunt assumenda quaerat.</p>
                </div>
            </div>
            <div class="container my-4">
                <h2 className='text-center'>Professional Team Members</h2>
                <div class="row justify-content-center  g-5">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div class="team-card ">
                            <div class="team-card-image">
                                <img src="/novelPics/moses.jpg" alt="" />
                            </div>
                            <p>Name: Moses Okocha</p>
                            <p class="title">Team Leader / C.E.O</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">

                        <div class="team-card">
                            <div class="team-card-image">
                                <img src="/novelPics/man1.jpg" alt="" />
                            </div>
                            <p>Name: Moses Okocha</p>
                            <p class="title">Team Leader / C.E.O</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">

                        <div class="team-card">
                            <div class="team-card-image">
                                <img src="/novelPics/man2.jpg" alt="" />
                            </div>
                            <p>Name: Moses Okocha</p>
                            <p class="title">Team Leader / C.E.O</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">

                        <div class="team-card">
                            <div class="team-card-image">
                                <img src="/novelPics/man2.jpg" alt="" />
                            </div>
                            <p>Name: Moses Okocha</p>
                            <p class="title">Team Leader / C.E.O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

