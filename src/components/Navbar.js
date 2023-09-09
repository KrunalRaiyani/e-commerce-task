import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'

const Navbar = () => {

    const context = useContext(AppContext)
    let { getApiData, userLogin, setUserLogin,setCart,cart } = context

    let navigate = useNavigate()
    let logout = () => {
        localStorage.clear()
        setUserLogin(false)
        navigate("/login")
    }

    let openCart = () => {
        navigate("/cart")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top px-4" style={{boxShadow:"0 -5px 15px #00000080"}}>
            <div className="container-fluid px-5 py-2 my-1">
                <div className="navbar-brand fw-semibold" style={{cursor:"pointer"}}>Navbar</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => userLogin&&getApiData("/")}>
                            <NavLink className="nav-link fw-semibold" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item" onClick={() => userLogin&&getApiData("/category/men's clothing")}>
                            <NavLink className="nav-link fw-semibold" aria-current="page" to="/category/men's-clothing">Men's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" aria-current="page" to="/category/woman's-clothing" onClick={() => userLogin&&getApiData("/category/women's clothing")}>Wen's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" aria-current="page" to="/category/jewelery" onClick={() => userLogin&&getApiData("/category/jewelery")}>jewelery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" aria-current="page" to="/category/electronics" onClick={() => userLogin&&getApiData("/category/electronics")}>electronics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {
                userLogin && <div className='d-flex gap-2 w-100 justify-content-end'>
                    <button type="button" className="btn btn-success" onClick={openCart}><img src="/cart.svg" alt="cart lgog" className='mb-1' /> Cart</button>
                    <button type="button" className="btn btn-danger me-4" onClick={logout}>Logout</button>
                </div>
            }
        </nav>

    )
}

export default Navbar