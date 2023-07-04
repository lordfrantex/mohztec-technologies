import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>

            <div class="about-section">
                <div class="inner-section">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt enim esse magnam minus nobis
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
            <div class="company_statement">
                <div class="mission">
                    <i class="fa-solid fa-pen-nib"></i>
                    <h4>Mission</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur temporibus animi sunt
                        facere,
                        quidem cum optio ex exercitationem numquam, iste eos doloribus, a magni?</p>
                </div>
                <div class="vision">
                    <i class="fa-solid fa-eye"></i>
                    <h4>Vision</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur temporibus animi sunt
                        facere,
                        quidem cum optio ex exercitationem numquam, iste eos doloribus, a magni?</p>
                </div>
            </div>
            <div class="choose_us">
                <h2>Why Choose Us?</h2>
                <i class="fa-solid fa-anchor"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga optio quae ducimus cumque consectetur
                    sequi, quo voluptatibus quaerat et voluptates officiis dolor explicabo iure deserunt quidem soluta. Delectus
                    laboriosam iusto magnam numquam, dolorum amet debitis quam dolore totam aliquid eaque, tempore ea autem.
                    Animi maxime in harum vero sed fugit ut suscipit dolores quos distinctio nostrum, earum tempore ducimus
                    minima incidunt ea blanditiis optio quasi voluptas molestiae aperiam! Qui fuga non dignissimos, recusandae
                    doloribus nostrum quae et ullam magnam excepturi tenetur reiciendis molestias. Sequi accusamus cupiditate
                    optio, quo ipsa quia at quibusdam similique architecto debitis! Est sunt assumenda quaerat.</p>
                <a href="#">Request a Quote</a>
            </div>
            <div class="our-team">
                <h2>Our Team</h2>

                <div class="team">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="/novelPics/moses.jpg" alt="" />
                        </div>
                        <p>Name: Moses Okocha</p>
                        <p class="title">Team Leader / C.E.O</p>
                    </div>
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="/novelPics/man1.jpg" alt="" />
                        </div>
                        <p>Name: Moses Okocha</p>
                        <p class="title">Team Leader / C.E.O</p>
                    </div>
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="/novelPics/man2.jpg" alt="" />
                        </div>
                        <p>Name: Moses Okocha</p>
                        <p class="title">Team Leader / C.E.O</p>
                    </div>
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
    )
}

export default About

