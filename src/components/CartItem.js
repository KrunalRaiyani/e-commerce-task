import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import DetailModal from './DetailModal'

const CartItem = (props) => {

    const context = useContext(AppContext)
    let { removeItem, setModalDetail } = context


    let setModal = () => {
        setModalDetail({
            item:  props.title ,
            price:  props.price ,
            category:  props.category ,
            quinetity:  props.quinetity ,
            payment:  props.payment ,
            pincode:  props.pincode 
        })
    }


    return (
        <>
            <div className="item-card d-flex justify-content-between align-items-center my-3 p-4 items rounded" style={{boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"}}>
                <div className="d-flex flex-row">
                    <img className="rounded" src={props.image} width={70} />
                    <div className="ml-2 ms-4">
                        <h5 className="font-weight-bold d-block">{props.title}</h5>
                        <h6 className="spec mt-3">{props.category}</h6>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <h4 className="d-block mx-4">{props.quinetity}</h4>
                    <h4 className="d-block ml-5 font-weight-bold mx-4">${props.price} X {props.quinetity}</h4>
                    <button type="button" className="btn btn-danger mx-2" onClick={() => removeItem(props.id)}>Remove</button>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#viewmore" onClick={setModal}>Check out</button>
                </div>
            </div>
            <DetailModal />
        </>


    )
}

export default CartItem