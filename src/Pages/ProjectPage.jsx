import React from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Footer from '../Components/Footer'
import Project from '../Components/Project'


const ProjectPage = () => {
    return (
        <div>
            <Header />
            <Title title="Our Projects" />
            <Project />
            <Footer />
        </div>
    )
}

export default ProjectPage