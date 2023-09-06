import React from 'react'

const DetailModal = (props) => {
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
                            <td>{props.item}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price</th>
                            <td>{props.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Category</th>
                            <td>{props.category}</td>
                        </tr>
                        <tr>
                            <th scope="row">Quinetity</th>
                            <td>{props.quinetity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Payment type</th>
                            <td>{props.payment}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pincode</th>
                            <td>{props.pincode}</td>
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