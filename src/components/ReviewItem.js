import React from 'react'

const ReviewItem = (props) => {
    return (
        <div className="alert alert-primary" role="alert">
            <div className='d-flex justify-content-between'>
                <h6 className="reviewer-name">{props.name}</h6>
                <h6>{props.inputRating}⭐</h6>
            </div>
            <p>{props.description}</p>
        </div>

    )
}

export default ReviewItem