import React from 'react'

const Title = (props) => {
    return (
        <div class="header">
            <h1>{props.title}</h1>
            <div class="header-nav">
                <a href="#">Home</a>
                <i class="fa-solid fa-arrow-right"></i>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Title