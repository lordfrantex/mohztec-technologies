import React from 'react'

const ShowBar = () => {
    return (
        <div>

            <div class="show-bar">
                <div class="unit">
                    <i class="fa-regular fa-face-smile"></i>
                    <h4><span>4000</span>+</h4>
                    <p>Happy Customers</p>
                </div>
                <div class="unit">
                    <i class="fas fa-clipboard-check"></i>
                    <h4><span>4000</span>+</h4>
                    <p>Projects Completed</p>
                </div>
                <div class="unit">
                    <i class="fas fa-check-circle"></i>
                    <h4><span>4000</span>+</h4>
                    <p>Successful Installations</p>
                </div>
                <div class="unit">
                    <i class="fas fa-trophy"></i>
                    <h4><span>4000</span>+</h4>
                    <p>Award Won</p>
                </div>
            </div>
        </div>
    )
}

export default ShowBar