import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import DetailModal from './DetailModal'

const CartItem = (props) => {

    const context = useContext(AppContext)
    let { removeItem } = context

    return (
        <>
        <div className="item-card d-flex justify-content-between align-items-center my-3 p-2 items rounded">
            <div className="d-flex flex-row">
                <img className="rounded" src={props.image} width={70} />
                <div className="ml-2 ms-4">
                    <h5 className="font-weight-bold d-block">{props.title}</h5>
                    <h6 className="spec mt-3">{props.category}</h6>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <h4 className="d-block mx-4">{props.quinetity}</h4>
                <h4 className="d-block ml-5 font-weight-bold mx-4">${props.price}</h4>
                <button type="button" className="btn btn-danger mx-2" onClick={() => removeItem(props.id)}>Remove</button>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#viewmore">Check out</button>
            </div>
        </div>
        <DetailModal item={props.title} price={props.price} category={props.category} quinetity={props.quinetity} payment={props.payment} pincode={props.pincode}  />
        </>


    )
}

export default CartItem