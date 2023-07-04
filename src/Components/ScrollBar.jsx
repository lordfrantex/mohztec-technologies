import React from 'react'

// const filled = document.querySelector('.filled');
// function update() {
//     filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
//     requestAnimationFrame(update);
// }
// update();


function ScrollBar() {
    return (

        <div className="progress-bar">
            <div className="filled"></div>
        </div>

    )
}

export default ScrollBar