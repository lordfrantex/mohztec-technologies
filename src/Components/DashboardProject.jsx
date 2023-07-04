import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
const DashboardProject = () => {
    const editorRef = useRef()
    const navigate = useNavigate()
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || [])
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [projects])
    const handleForm = (e) => {
        const { value, name, files, type, text } = e.target
        setProjects(prev => (
            {
                ...prev,
                [name]: type === "file" ? files[0].name : value,

            })
        )
    }

    const [points, setPoints] = useState('')
    const [mapPoints, setMapPoints] = useState([])
    const updatePoints = (e, addPoints) => {
        e.preventDefault()
        setMapPoints(prev => [...prev, addPoints])
    }
    useEffect(() => {
        setProjects(prev => ({ ...prev, mapPoints }))
    }, [mapPoints])

    const [addFeatureText, setAddFeatureText] = useState('')
    const [addFeatures, setAddFeatures] = useState([])
    const updateFeatures = (e, addFeatureText) => {
        e.preventDefault()
        setAddFeatures(prev => [...prev, addFeatureText])
    }

    useEffect(() => {
        setSingleProject(prev => ({ ...prev, addFeatures }))
    }, [addFeatures])
    const [singleProject, setSingleProject] = useState({
        title: '',
        description: '',
        image: '',
    })

    const updateProject = (e) => {
        const { value, name, files, type, text } = e.target

        setSingleProject(prev => ({
            ...prev,
            [name]: type === "file" ? files[0].name : value,

        }))
    }
    const [instruct, setInstruct] = useState(JSON.parse(localStorage.getItem('projects')).instruct || [])
    const updateInstruct = (singleProject) => {
        setInstruct(prev => [...prev, singleProject])
        setSingleProject({
            title: '',
            description: '',
            image: '',

        })
    }
    useEffect(() => {
        setProjects(prev => ({ ...prev, instruct }))
    }, [instruct])

    const showInst = instruct && instruct.map((item, index) => {
        return (
            <div className="course-instuctor-container">
                <div key={index} className='course-instructors'>
                    <div className="course-instructors-image">
                        <img src="" alt="" />
                    </div>
                    <div className="course-instructors-info">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                    <button onClick={(e) => removeInstruct(item.title, e)}>Remove</button>
                </div>
            </div>
        )
    })

    const removeInstruct = (title, e) => {
        e.preventDefault()
        const remove = instruct.filter(item => item.title !== title)
        setInstruct(remove)

    }
    const uploadData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('courseInfo', JSON.stringify(projects))
        Axios.post(
            'https://httpbin.org/post', formData
        )
        // .then(res => console.log(res))
        // .catch(error => console.log(error))
        console.log(formData);
    }

    return (
        <div>
            <div className="add-course-container">
                <form action="" className='shipping-form add-course'>
                    <h3>Add Projects</h3>
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" placeholder='Enter project title' name='title' value={projects.title} onChange={handleForm} /><br />
                    </div>

                    <div>
                        <label htmlFor="image">Cover image:</label>
                        <input style={{ border: 'none' }} type="file" name='coverImage' value={null} onChange={handleForm} />
                    </div>
                    <div>
                        <label htmlFor="id">Id:</label> <br />
                        <input type="text" placeholder="Enter project id " name='id' value={projects.id} onChange={handleForm} /><br />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label> <br />
                        <textarea onChange={handleForm} type='text' placeholder='Enter description' name="description" value={projects.description} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                    </div>
                    <div>
                        <label htmlFor="id">Points</label> <br />
                        <input type="text" placeholder="Enter project's points " name='points' value={points} onChange={(e) => setPoints(e.target.value)} /><br />
                        <button onClick={(e) => updatePoints(e, points)}>Add points</button>
                    </div>

                    <div className="update-first-row">
                        <div>
                            <label htmlFor="price">Select category:</label><br />
                            <select name="category" value={projects.category} onChange={handleForm} id="" style={{ width: '100%', padding: '8.4px 10px', borderRadius: '9px' }}>
                                <option style={{ display: 'none' }}></option>
                                <option >Solar</option>
                                <option >CCTV</option>
                                <option >Electrical</option>
                                <option >IoT/ Home automation</option>
                            </select>
                        </div>


                    </div>
                    <div className="instructors ">
                        <h4>Single project details</h4>
                        <div className="update-first-row">
                            <div>
                                <label htmlFor="name">Title:</label><br />
                                <input type="text" placeholder="Enter project title " name='title' value={singleProject.title} onChange={updateProject} /><br />
                            </div>

                            <div>
                                <label htmlFor="image"> Picture:</label>
                                <input style={{ border: 'none' }} type="file" name='image' value={null} onChange={updateProject} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Single project description:</label> <br />
                            <textarea onChange={updateProject} type='text' placeholder='Enter single project description' name="description" value={singleProject.description} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                        </div>
                        <div>
                            <label htmlFor="features">Single project features:</label> <br />
                            <input onChange={(e) => setAddFeatureText(e.target.value)} type='text' placeholder='Enter features' name="features" value={addFeatureText}></input>
                            <button onClick={(e) => updateFeatures(e, addFeatureText)}>Add features</button>
                        </div>
                        <button className='add-tutor' onClick={(e) => { e.preventDefault(); updateInstruct(singleProject); }}>Add single project</button>

                        <div className="map-instructors">
                            {showInst}
                        </div>

                    </div>

                    <input type="submit" value="Continue" className='submit' onClick={(e) => uploadData(e)} />
                </form>
                <div className="preview-course-container">
                    <div className="preview-courses">
                        <div className="preview-course-image">
                            <img src="" alt="" />
                        </div>
                        <div className="preview-course-info">
                            <h4>Effect of using solar balesi in det sesase</h4>
                            <p>Category: solar</p>
                            <p><strong>Price: $40.45</strong></p>
                            <button>Remove</button>
                            <button onClick={(e) => { e.preventDefault(); navigate('/dashboardPage/updateDashbordCourse') }}>Edit</button>

                        </div>
                    </div>
                    <div className="preview-courses">
                        <div className="preview-course-image">
                            <img src="" alt="" />
                        </div>
                        <div className="preview-course-info">
                            <h4>Effect of using solar balesi in det sesase</h4>
                            <p>Category: solar</p>
                            <p><strong>Price: $40.45</strong></p>
                            <button>Remove</button>
                            <button onClick={(e) => { e.preventDefault(); navigate('/dashboardPage/updateDashbordCourse') }}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProject