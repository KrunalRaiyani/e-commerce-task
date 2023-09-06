import React from 'react'

const CardItem = (props) => {
  return (
    <div className="item-card card h-100" style={{cursor:"pointer"}}>
      <div className='d-flex justify-content-center' style={{ height: "220px", overflow: "hidden" }}>
        <img src={props.image} className="card-img-top w-auto h-100 w-100 p-4" alt="img" />
      </div>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h4 className='mb-3'>{props.price}$</h4>
          <h4>{props.rating}⭐</h4>
        </div>
        <p className="card-text text-justify mb-4">{props.description.slice(0, 80)} ...</p>
        <button type="button" className="btn btn-outline-success w-100">View Details</button>
      </div>
    </div>
  )
}
export default CardItem