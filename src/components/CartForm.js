import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/context'

const CartForm = () => {

    const context = useContext(AppContext)
    let { addItem } = context


    const pincodeRef = useRef()
    const selectRef = useRef()
    const checkRef = useRef()
    const radioRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(pincodeRef.current.value,selectRef.current.value,checkRef.current.checked,radioRef.current.checked)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Pincode</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={pincodeRef} required />
            </div>
           
            <select className="form-select mb-4" aria-label="Default select example" ref={selectRef}>
                <option defaultValue value={1}>Quentity</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
            <div className='d-flex gap-4 mb-4'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" ref={radioRef} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Cash on deliverys
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Online payment
                    </label>
                </div>
            </div>
            <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  ref={checkRef}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Check to confirm
                </label>
            </div>


            <button type="submit" className="btn btn-success">Add to cart</button>
        </form>
    )
}

export default CartForm