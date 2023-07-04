import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const SingleTraining = () => {
    const { singleTraining } = useParams()
    return (
        <div>
            <Header />
            <div className="single-training-header">
                <div className="single-training-main-image">
                    <img src="/novelPics/solar3.jpg" alt="" />
                </div>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            </div>
            <div className="get-enrolled"><button>Get Enrolled</button></div>
            <h4 className='course-overview'>Course Overview</h4>
            <div className="course-content">
                <div className="course-right">
                    <div className="course-description">
                        <h3>Course Description</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </div>
                    <div className="course-certification">
                        <h3>Certification</h3>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                            on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable.
                        </p>

                    </div>
                    <div className="course-outcome">
                        <h3>Learning Outcome</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                        <ul>
                            <h5>Skills you will gain</h5>
                            <li> <i className="fa-solid fa-arrow-right"></i> More than 37 talks and 55.5 long stretches of substance!</li>
                            <li> <i className="fa-solid fa-arrow-right"></i> More than 37 talks and 55.5 long stretches of substance!</li>
                            <li> <i className="fa-solid fa-arrow-right"></i> More than 37 talks and 55.5 long stretches of substance!</li>
                            <li> <i className="fa-solid fa-arrow-right"></i> More than 37 talks and 55.5 long stretches of substance!</li>
                            <li> <i className="fa-solid fa-arrow-right"></i> More than 37 talks and 55.5 long stretches of substance!</li>
                        </ul>
                    </div>

                </div>
                <div className="course-left">
                    <div className="course-details">
                        <h4>Course Details</h4>
                        <table>
                            <tr>
                                <td><i class="fa-regular fa-clock"></i>Duration</td>
                                <td>4 weeks</td>
                            </tr>
                            <tr>
                                <td><i class="fa-solid fa-book-open"></i>Lectures</td>
                                <td>3 lessons</td>
                            </tr>
                            <tr>
                                <td><i class="fa-solid fa-user"></i>Students</td>
                                <td>34</td>
                            </tr>
                            <tr>
                                <td><i class="fa-solid fa-medal"></i>Coach(s)</td>
                                <td>Lord Frantex, Moses Okocha</td>
                            </tr>
                            <tr>
                                <td><i class="fas fa-globe"></i>Language</td>
                                <td>English</td>
                            </tr>
                        </table>
                    </div>
                    <div className="popular-courses-container">
                        <h4>Popular Courses</h4>
                        <div className="popular-courses">
                            <div className="popular-courses-image">
                                <img src="/novelPics/solar3.jpg" alt="" />
                            </div>
                            <div className="popular-courses-info">
                                <NavLink to='#'> <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eligendi?</h5></NavLink>
                                <h5><strong> price: $50.3</strong></h5>
                            </div>
                        </div>
                        <div className="popular-courses">
                            <div className="popular-courses-image">
                                <img src="/novelPics/solar3.jpg" alt="" />
                            </div>
                            <div className="popular-courses-info">
                                <NavLink to='#'> <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eligendi?</h5></NavLink>
                                <h5><strong> price: $50.3</strong></h5>
                            </div>
                        </div>
                        <div className="popular-courses">
                            <div className="popular-courses-image">
                                <img src="/novelPics/solar3.jpg" alt="" />
                            </div>
                            <div className="popular-courses-info">
                                <NavLink to='#'> <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eligendi?</h5></NavLink>
                                <h5><strong> price: $50.3</strong></h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="our-team instructors">
                <h2>Meet your Instructor(s) for this course</h2>

                <div class="team ">
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

                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SingleTraining