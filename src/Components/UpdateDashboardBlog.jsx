import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react'
import { getNodeText } from '@testing-library/react'

const UpdateDashboardBlog = () => {
    const navigate = useNavigate()
    const [content, setContent] = useState('')
    const editor = useRef()
    const [blogPost, setBlogPost] = useState(JSON.parse(localStorage.getItem('updateBlogPost')) || [])
    useEffect(() => {
        localStorage.setItem('updateBlogPost', JSON.stringify(blogPost))
    }, [blogPost])
    const handleForm = (e) => {
        const { value, name, files, type, text } = e.target
        setBlogPost(prev => (
            {
                ...prev,
                [name]: type === "file" ? files[0].name : value,


            })
        )
    }



    const submit = (e) => {
        e.preventDefault()
        // console.log(blogPost);
    }
    return (
        <form action="" className='shipping-form '>
            <h3>Update this blog Post</h3>
            <div>
                <label htmlFor="title">Title</label><br />
                <input type="text" placeholder='Enter blog title' name='title' value={blogPost.title} onChange={handleForm} /><br />
            </div>
            <div>
                <label htmlFor="author">Author</label><br />
                <input type="text" placeholder="Enter author's name " name='author' value={blogPost.author} onChange={handleForm} /><br />
            </div>
            <div>
                <label htmlFor="city">Cover image:</label>
                <input style={{ border: 'none' }} type="file" name='image' value={null} onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="id">Id</label> <br />
                <input type="text" placeholder="Enter blog id " name='id' value={blogPost.id} onChange={handleForm} /><br />
            </div>
            <div>
                <label htmlFor="description">Description (in not more than 100words):</label> <br />
                <textarea onChange={handleForm} type='text' placeholder='Enter a short description for the blog' name="description" value={blogPost.description} style={{ border: '1px solid rgb(70,90,95)', width: '100%' }}></textarea>
            </div>
            <div className='blog-body'>

            </div>

            <JoditEditor
                ref={editor}
                value={content}
                onChange={blogBody => setBlogPost(prev => ({ ...prev, blogBody }))}
            />
            <input type="submit" value="Continue" className='submit' onClick={(e) => submit(e)} />

        </form>

    )
}

export default UpdateDashboardBlog
