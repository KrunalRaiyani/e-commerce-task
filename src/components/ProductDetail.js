import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import CartForm from './CartForm'

const ProductDetail = () => {

    const context = useContext(AppContext)
    let { ProductDetail } = context


    let navigate =  useNavigate()

    const [showForm, setshowForm] = useState(false)

    let addToCart = ()=>{
        setshowForm(true)
    }

    return (
        <div className='container m-auto pt-4'>
            <div className="card p-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ProductDetail.image} className="img-fluid rounded-start w-50 m-3" alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title py-2">{ProductDetail.title}</h4>
                            <div className='d-flex justify-content-between'>
                                <h4 className='my-2'>{ProductDetail.price}$</h4>
                                <h4>{ProductDetail.rating.rate}⭐</h4>
                            </div>
                            <p className="card-text my-2">{ProductDetail.description}</p>
                        <button type="button" className="btn btn-danger mt-3" onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>

                {showForm&&<CartForm/>}
               
            </div>
        </div>
    )
}

export default ProductDetail