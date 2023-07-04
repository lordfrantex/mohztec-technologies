import React from 'react'
import ShowBar from './ShowBar'
import { Link } from "react-router-dom";
import ProjectList from './ProjectList';
const Project = () => {

    const displayData = ProjectList.map((item, index) => {
        return (
            <div class="project">
                <div class="project-image">
                    <img src="/novelPics/solar2.jpg" alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.description} </p>
                    <ul>
                        <li><i class="fa-solid fa-check-double"></i>{item.list1}</li>
                        <li><i class="fa-solid fa-check-double"></i>{item.list2}</li>
                        <li><i class="fa-solid fa-check-double"></i>{item.list3}</li>
                        <li><i class="fa-solid fa-check-double"></i>{item.list4}</li>
                    </ul>
                    <Link to={`/project/${item.id}`}>Read More</Link>

                </div>

            </div>
        )
    })
    return (
        <div>

            <div class="categories">
                <p> Project Categories</p>
                <ul>
                    <li><Link to="/project/1"> CCTV</Link></li>
                    <li><Link to="/project/3">Solar</Link></li>
                    <li><Link to="/project/4">Electrical</Link></li>
                    <li><Link to="/project/2">IoT/Automatons</Link></li>
                    <li><Link to="/project/5">Inverter</Link></li>
                    <li><Link to="/project/6">Automatic Door</Link></li>
                </ul>
            </div>
            <div class="project-row">
                {displayData}
            </div>
            <ShowBar />
        </div>
    )
}

export default Project