import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid p-0 mt-5'>

            <footer class="footer p-3 container-xxl">
                <div class="footercol1">
                    <div class="footercol1top">
                        <div class="footercompanypics">
                            <img src="/novelPics/mohztec_logo2.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ea exercitationem fugiat saepe
                            minima sint. Voluptate, pariatur ipsa fugiat consequatur, minima aspernatur eaque, doloribus
                            optio sint reiciendis velit vel inventore.</p>
                    </div>
                    <div class="subscribe">
                        <h4>Subscribe to Newsletter</h4>
                        <p>Subscribe to our newsletter to receive latest news on our product or services.</p>
                        <form action="" class="subscribeform">
                            <input type="email" placeholder="Enter Your Email Here" />
                            <button><i class="fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>

                </div>
                <div class="footercol2">
                    <div class="footercol2top">
                        <div class="footeraddress">
                            <div class="footeraddresspics">
                                <i class="fa-solid fa-address-book"></i>
                            </div>

                            <h4>Address</h4>
                            <p>Shop 3, Iyaniwura Shopping Complex, Akure, Ondo State, Nigeria.</p>

                        </div>
                        <div class="footercontact">
                            <div class="footercontactpics">
                                <i class="fa-solid fa-mobile-screen"></i>
                            </div>
                            <div class="phonenumber">
                                <h4>Contacts</h4>
                                <p>+248102300105</p>
                                <p>+248102300105</p>
                            </div>
                        </div>
                        <div class="footertime">
                            <div class="footertimepics">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <h4>Working Time</h4>
                            <div class="workingtimeinfo">
                                <p> Mon-Fri : 08.00AM - 06.00PM </p>
                                <p> Saturday: 10.00AM - 05.00PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="footercol2bottom">
                        <div class="quicklinks">
                            <h4>Quick Links</h4>
                            <ul>
                                <li> <a href="#"> Latest news and blogs</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Testimonies</a></li>
                                <li><a href="#">Solar FAQ</a></li>
                                <li><a href="#">Request for Quotation</a></li>

                            </ul>
                        </div>
                        <div class="company">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#"> Privacy Policy</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Patners and Sponsors</a></li>
                                <li><a href="#">Term of Use</a></li>

                            </ul>
                        </div>
                        <div class="footerproduct">
                            <h3>Product</h3>
                            <ul>
                                <li><a href="#">Battries</a></li>
                                <li><a href="#">Solar Panels</a></li>
                                <li><a href="#">Inverters</a></li>
                                <li><a href="#">Solar Genarators</a></li>
                                <li><a href="#">Solar Powered Devices</a></li>
                                <li><a href="#">Solar Gadgets</a></li>
                            </ul>
                        </div>
                        <div class="social-link">
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>

            </footer>
            <div class="copyright container-fluid">
                <p>Copyright @ 2021 Mohztec Technologies All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer