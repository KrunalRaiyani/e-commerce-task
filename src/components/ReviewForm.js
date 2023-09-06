import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'
import { useFormik } from 'formik'
import * as yup from "yup";

const ReviewForm = (props) => {

    // context
    const context = useContext(AppContext)
    let { addReview } = context

    // get inpute rating
    const [inputRating, setinputRating] = useState(1)


    // onsubmit handle
    let onSubmit = (value, actions) => {
        addReview(props.id, value.name, value.review, inputRating)
        actions.resetForm()
    }

    // formil schema
    let formSchema = yup.object().shape({
        name: yup.string().min(2).required(),
        review: yup.string().required(),
    });

    // formik validation
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
        useFormik({
            initialValues: {
                name: "",
                review: ""
            },
            validationSchema: formSchema,
            onSubmit,
        });

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Review</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">

                            {/* revirw form */}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input id="name" name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className={`form-control ${errors.name && touched.name ? "err-border" : ""}`} />
                                    {errors.name && touched.name && (
                                        <p className="fs-6 text-danger">{errors.name}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="review" className="form-label">Review</label>
                                    <textarea id="review" name="review" value={values.review} onChange={handleChange} onBlur={handleBlur}
                                        className={`form-control ${errors.review && touched.review ? "err-border" : ""}`}></textarea>
                                    {errors.review && touched.review && (
                                        <p className="fs-6 text-danger">{errors.review}</p>
                                    )}
                                </div>


                                <div className="mb-3 form-check d-flex justify-content-between p-3" >
                                    <div onClick={() => setinputRating(1)}>
                                        <input name='rating' type="radio" className="form-check-input" id="radio1" />
                                        <label className="form-check-label" htmlFor="radio1">1⭐</label>
                                    </div>
                                    <div onClick={() => setinputRating(2)}>
                                        <input name='rating' type="radio" className="form-check-input" id="radio2" />
                                        <label className="form-check-label" htmlFor="radio2">2⭐</label>
                                    </div>
                                    <div onClick={() => setinputRating(3)}>
                                        <input name='rating' type="radio" className="form-check-input" id="radio3" />
                                        <label className="form-check-label" htmlFor="radio3">3⭐</label>
                                    </div>
                                    <div onClick={() => setinputRating(4)}>
                                        <input name='rating' type="radio" className="form-check-input" id="radio4" />
                                        <label className="form-check-label" htmlFor="radio4">4⭐</label>
                                    </div>
                                    <div onClick={() => setinputRating(5)}>
                                        <input name='rating' type="radio" className="form-check-input" id="radio5" />
                                        <label className="form-check-label" htmlFor="radio5">5⭐</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReviewForm