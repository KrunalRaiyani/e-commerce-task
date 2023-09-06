import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import CardItem from './CardItem'

const Cards = () => {

    // use navigation for navigate page
    const navigate = useNavigate();
 
    // get auth token for authanticate the user
    let authToken = localStorage.getItem("authToken")

    useEffect(() => {

        if (authToken !== "AuthTokenXYZ") {
            navigate("/login")
        }
    }, [])


    // context datwa
    const context = useContext(AppContext)
    let { cardArr, setProductDetail,loading } = context


    // handle click event
    let handleClick = (e) => {
        setProductDetail(e)
        localStorage.setItem("productData",JSON.stringify(e))
        navigate("/cardByID/product-Id"+e.id)
    }

    return (
        !loading&&<div className='container m-auto mt-4 pt-4 row'>
            {
               authToken&&cardArr.map((e) => {
                    return (<div className='col-md-3 col-sm-6 mb-4' key={e.id} onClick={() => handleClick(e)}>
                        <CardItem key={e.id} id={e.id} title={e.title} description={e.description} image={e.image} price={e.price} rating={e.rating.rate} />
                    </div>)
                })
            }
        </div>

    )
}

export default Cards