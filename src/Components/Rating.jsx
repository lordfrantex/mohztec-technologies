import react, { useState } from "react"
const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div style={{ display: 'inline-block' }}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return (

                    <label style={{ cursor: 'pointer' }} key={index}>
                        <input type="radio"
                            name="rating"
                            style={{ color: 'blue', display: 'none' }}
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        <i className='fa-solid fa-star'
                            style={{ color: `${ratingValue <= (hover || rating) ? 'orange' : 'white'}`, fontSize: '16px', margin: '0 10px' }}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        ></i>
                    </label>
                )
            })}
        </div >
    )
}

export default Rating

