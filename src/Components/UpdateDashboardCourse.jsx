import React, { useRef, useState, useEffect, useNavigate } from 'react'
import Axios from 'axios'
const UpdateDashboardCourse = () => {
    const editorRef = useRef()
    // const navigate = useNavigate()
    const [courses, setCourses] = useState(JSON.parse(localStorage.getItem('courses')) || [])
    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses))
    }, [courses])
    const handleForm = (e) => {
        const { value, name, files, type, text } = e.target
        setCourses(prev => (
            {
                ...prev,
                [name]: type === "file" ? files[0].name : value,

            })
        )
    }
    const [instructors, setInstructors] = useState({
        name: '',
        role: '',
        image: '',
    })
    const updateInstructors = (e) => {
        const { value, name, files, type, text } = e.target

        setInstructors(prev => ({
            ...prev,
            [name]: type === "file" ? files[0].name : value,

        }))
    }
    const [instruct, setInstruct] = useState(JSON.parse(localStorage.getItem('courses')).instruct || [])
    const updateInstruct = (instructors) => {
        setInstruct(prev => [...prev, instructors])
        setInstructors({
            name: '',
            role: '',
            image: '',

        })
    }
    useEffect(() => {
        setCourses(prev => ({ ...prev, instruct }))
    }, [instruct])

    const showInst = instruct && instruct.map((item, index) => {
        return (
            <div className="course-instuctor-container">
                <div key={index} className='course-instructors'>
                    <div className="course-instructors-image">
                        <img src="" alt="" />
                    </div>
                    <div className="course-instructors-info">
                        <p>{item.name}</p>
                        <p>{item.role}</p>
                    </div>
                    <button onClick={(e) => removeInstruct(item.name, e)}>Remove</button>
                </div>
            </div>
        )
    })

    const removeInstruct = (name, e) => {
        e.preventDefault()
        const remove = instruct.filter(item => item.name !== name)
        setInstruct(remove)

    }
    const uploadData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('courseInfo', JSON.stringify(courses))
        Axios.post(
            'https://httpbin.org/post', formData
        )
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form action="" className='shipping-form '>
                <h3>Update this course</h3>
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" placeholder='Enter blog title' name='title' value={courses.title} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="price">Price</label><br />
                    <input type="text" placeholder="Enter price " name='price' value={courses.price} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="image">Cover image:</label>
                    <input style={{ border: 'none' }} type="file" name='coverImage' value={null} onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="id">Id:</label> <br />
                    <input type="text" placeholder="Enter blog id " name='id' value={courses.id} onChange={handleForm} /><br />
                </div>
                <div>
                    <label htmlFor="description">Description:</label> <br />
                    <textarea onChange={handleForm} type='text' placeholder='Enter description' name="description" value={courses.description} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                </div>
                <div>
                    <label htmlFor="outcome">Learning outcome: </label> <br />
                    <textarea onChange={handleForm} type='text' placeholder='Enter course outcome' name="outcome" value={courses.outcome} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                </div>
                <div>
                    <label htmlFor="certification">Certification: </label> <br />
                    <textarea onChange={handleForm} type='text' placeholder='Enter course certification' name="certification" value={courses.certification} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
                </div>
                <div className="update-first-row">
                    <div>
                        <label htmlFor="price">Language:</label><br />
                        <input type="text" placeholder="Enter language " name='language' value={courses.language} onChange={handleForm} /><br />
                    </div>
                    <div>
                        <label htmlFor="price">Lectures:</label><br />
                        <input type="text" placeholder="Enter number of lectures " name='lectures' value={courses.lectures} onChange={handleForm} /><br />
                    </div>
                    <div>
                        <label htmlFor="price">Duration:</label><br />
                        <input type="text" placeholder="Enter duration (in weeks) " name='duration' value={courses.duration} onChange={handleForm} /><br />
                    </div>
                </div>
                <div className="update-first-row">
                    <div>
                        <label htmlFor="price">Select category:</label><br />
                        <select name="category" value={courses.category} onChange={handleForm} id="" style={{ width: '100%', padding: '8.4px 10px', borderRadius: '9px' }}>
                            <option style={{ display: 'none' }}></option>
                            <option >Solar</option>
                            <option >CCTV</option>
                            <option >Electrical</option>
                            <option >IoT/ Home automation</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Persons:</label><br />
                        <input type="text" placeholder="People registered(number) " name='persons' value={courses.persons} onChange={handleForm} /><br />
                    </div>

                </div>
                <div className="instructors ">
                    <h4>Instructors</h4>
                    <div className="update-first-row">
                        <div>
                            <label htmlFor="name">Name:</label><br />
                            <input type="text" placeholder="Enter instructor name " name='name' value={instructors.name} onChange={updateInstructors} /><br />
                        </div>
                        <div>
                            <label htmlFor="role">Instructor's role:</label><br />
                            <input type="text" placeholder="Enter role " name='role' value={instructors.role} onChange={updateInstructors} /><br />
                        </div>
                        <div>
                            <label htmlFor="image">Instructor's picture:</label>
                            <input style={{ border: 'none' }} type="file" name='image' value={null} onChange={updateInstructors} />
                        </div>
                    </div>
                    <button className='add-tutor' onClick={(e) => { e.preventDefault(); updateInstruct(instructors); }}>Add tutor</button>

                    <div className="map-instructors">
                        {showInst}
                    </div>

                </div>

                <input type="submit" value="Continue" className='submit' onClick={(e) => uploadData(e)} />
            </form>
        </div>
    )
}

export default UpdateDashboardCourse