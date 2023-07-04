import { useParams, NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
const SingleBlog = () => {
    const { singleBlog } = useParams()
    return (
        <div>
            <Header />
            <div className='blog-back'>
                <NavLink to='/blog' ><i className="fas fa-arrow-left"></i></NavLink>
            </div>
            <div className="single-blog">
                <div className="single-blog-right">
                    <div className="single-blog-main-image">
                        <img src="/novelPics/solar3.jpg" alt="" />
                    </div>
                    <h3>Effect of using solar based equipments</h3>
                    <strong>Author: Franklyn Kanebi</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti maxime porro tenetur provident illo amet?
                        Voluptatibus exercitationem ullam deleniti reprehenderit a possimus iusto ipsum eveniet vero obcaecati, dolores
                        ipsa voluptates temporibus quibusdam odit tenetur praesentium dolorem harum, vel totam minima pariatur animi.
                        Voluptatum deleniti laboriosam, non qui incidunt, suscipit tempora quod eos placeat molestiae, earum inventore
                        eveniet illo nulla error quis rerum atque at illum doloremque accusamus. Ex, mollitia. Facere consequuntur
                        cumque minus distinctio. Est ullam accusantium quisquam! Ipsam laboriosam sit natus dignissimos eos quo,
                        accusantium ab cum et nobis iusto nostrum rerum perferendis? Sunt, suscipit? Repellat, explicabo. Eos!</p>
                    <div className="comment">
                        <div className="comment-box">
                            <h5>Comments(14)</h5>
                            <textarea name="" id="" placeholder="Add a comment"></textarea>
                            <div className="comment-icon">
                                <i class="fa-solid fa-thumbs-up"></i>
                                <i class="fa-solid fa-thumbs-down"></i>
                            </div>
                            <button>Post</button>
                        </div>

                    </div>
                    <div className="share-article">
                        <div className="tech-icons">
                            <p style={{ marginBottom: 0 }}><strong> Share article with friends via</strong></p>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-tiktok"></i>
                        </div>
                    </div>
                </div>
                <div className="single-blog-left">
                    <h4>Related Blogs</h4>
                    <div className="related-blog">
                        <div className="related-blog-image">
                            <img src="/novelPics/solar3.jpg" alt="" />
                        </div>
                        <div className="related-blog-title">
                            <p>Effect of using solar based equipments</p>
                            <span>Category: solar</span>
                        </div>
                    </div>
                    <div className="related-blog">
                        <div className="related-blog-image">
                            <img src="/novelPics/solar3.jpg" alt="" />
                        </div>
                        <div className="related-blog-title">
                            <p>Effect of using solar based equipments</p>
                            <span>Category: solar</span>
                        </div>
                    </div>
                    <div className="related-blog">
                        <div className="related-blog-image">
                            <img src="/novelPics/solar3.jpg" alt="" />
                        </div>
                        <div className="related-blog-title">
                            <p>Effect of using solar based equipments</p>
                            <span>Category: solar</span>
                        </div>
                    </div>
                    <div className="related-blog">
                        <div className="related-blog-image">
                            <img src="/novelPics/solar3.jpg" alt="" />
                        </div>
                        <div className="related-blog-title">
                            <p>Effect of using solar based equipments</p>
                            <span>Category: solar</span>
                        </div>
                    </div>
                    <div className="email-update">
                        <h5>Subscribe to email updates</h5>
                        <input type="text" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <div className="blog-review">
                        <h4>Comments(14)</h4>
                        <div className="blog-review-card">
                            <h5>Mard Hallad <span><i class="fa-solid fa-thumbs-up"></i></span></h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident. Dolore accusantium at nobis?
                                rem eius deserunt accusantium ex?</p>
                        </div>
                        <div className="blog-review-card">
                            <h5>Lord Frantex <span><i class="fa-solid fa-thumbs-up"></i></span></h5>
                            <p>Lorem ipsum dolor sit amet consecte deserunt accusantium ex?</p>
                        </div>
                        <div className="blog-review-card">
                            <h5>Bose Mike <span><i class="fa-solid fa-thumbs-up"></i></span></h5>
                            <p>Nice one bro!!!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleBlog