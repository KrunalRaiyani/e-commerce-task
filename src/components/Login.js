import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";

const Login = () => {

    const [errorFlag, setErrorFlag] = useState(false)

    const context = useContext(AppContext)
    let { setUserLogin } = context

    // use navigation for navigate page
    const navigate = useNavigate();

    // get auth token for authanticate the user
    let authToken = localStorage.getItem("authToken")

    // match email or password 
    const onSubmit = (values, action) => {
        if ((values.email === "test@gmail.com" && values.password === "1234567890") || authToken === "AuthTokenXYZ") {
            action.resetForm();
            localStorage.setItem("authToken", "AuthTokenXYZ")
            setUserLogin(true)
            navigate("/")
            setErrorFlag(false)
        }
        else {
            setErrorFlag(true)
        }
    };

    // formik schema
    let formSchema = yup.object().shape({
        email: yup.string().email().required("plese enter valid email"),
        password: yup
            .string()
            .min(5)
            .required()
    });

    // setup formik values
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: formSchema,
            onSubmit,
        });

    return (
        <div className="d-flex align-items-center m-auto gap-4" style={{height:"85vh",width:"80vw"}}>
            <img src="https://inotebook-todo-app.netlify.app/img/signup.png" alt="login image"  style={{height:"60%"}} />
            <form onSubmit={handleSubmit} className="container w-50 pb-4">
                <h2 className="mb-4 pb-2">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.email && touched.email ? "err-border" : ""
                            }`}
                    />
                    {errors.email && touched.email && (
                        <p className="fs-6 text-danger">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.password && touched.password ? "err-border" : ""
                            }`}
                            autoComplete="on"
                    />
                    {errors.password && touched.password && (
                        <p className="fs-6 text-danger">{errors.password}</p>
                    )}
                </div>
                <button type="submit" className={`btn ${errors.password||errors.email ? "btn-danger":"btn-success"} w-100`}>
                    Submit
                </button>
            </form>
            {errorFlag && <p className="container mt-4 text-danger">plese enter valid email and password</p>}
        </div>
    );
}

export default Login