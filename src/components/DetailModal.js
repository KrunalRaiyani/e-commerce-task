import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const DetailModal = () => {

    const context = useContext(AppContext)
    let {modalDetail} = context

  return (
    <div className="modal fade" id="viewmore" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">More Detail</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">


                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{modalDetail.item}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price</th>
                            <td>${modalDetail.price*modalDetail.quinetity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Category</th>
                            <td>{modalDetail.category}</td>
                        </tr>
                        <tr>
                            <th scope="row">Quinetity</th>
                            <td>{modalDetail.quinetity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Payment type</th>
                            <td>{modalDetail.payment}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pincode</th>
                            <td>{modalDetail.pincode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default DetailModal