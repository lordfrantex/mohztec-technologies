import React from 'react'
import { Link, useParams } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import ProjectList from './ProjectList';
import ShowBar from './ShowBar';

const SpecificProject = () => {
    const { singleProject } = useParams()
    const put = ProjectList.find((item) => item.id == singleProject)
    const { title, description, list1, list2, list3, list4, image, additionalImage1 } = put

    return (<div>
        <Header />
        <div className='specific-project-title'>{title}</div>
        <div className="specific-project-navigate-back">
            <Link to='/project'><i class="fa-solid fa-arrow-left-long"></i> back to Projects</Link>
        </div>
        <div className="specific-project-row">
            <div className="specific-project-texts">
                <h3>{list1}</h3>
                <p className='specific-product-description'>{description}</p>
                <ul className='features'>
                    <p>Execptional Features</p>
                    <li> <i class="fa-solid fa-circle-check"></i>It has the capacity to enhance mexapixel automatically</li>
                    <li> <i class="fa-solid fa-circle-check"></i>It accomodates night recording</li>
                    <li> <i class="fa-solid fa-circle-check"></i>Water resistant features</li>
                </ul>
            </div>
            <div className="specific-project-image">
                <img src={image} alt="" />
            </div>

        </div>
        <div className="specific-project-row">
            <div className="specific-project-texts">
                <h3>{list4}</h3>
                <p className='specific-product-description'>{description}</p>
                <ul className='features'>
                    <p>Execptional Features</p>
                    <li> <i class="fa-solid fa-circle-check"></i>It has the capacity to sense a close object</li>
                    <li> <i class="fa-solid fa-circle-check"></i>It opens 5 meters before you get to it</li>
                    <li> <i class="fa-solid fa-circle-check"></i>Audio functionalities</li>
                </ul>
            </div>
            <div className="specific-project-image">
                <img src={additionalImage1} alt="" />
            </div>

        </div>
        <div className="additional-content">
            <div className="additional-text">
                <p className='take-view'>Take a view of our photo gallary</p>
                <p className='our-project'>View more of our <span>{title}</span></p>
            </div>
            <div className="additional-specific-products">
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
                <div className="additional-image"> <img src={image} alt="" /></div>
            </div>
        </div>
        <ShowBar />
        <Footer />
    </div>
    )
}

export default SpecificProject