import { createContext, useEffect, useState } from "react";

let AppContext = createContext()


let AppProvider = (props) => {

    const [userLogin, setUserLogin] = useState(false)

    // card array 
    const [cardArr, setCardArr] = useState([])

    // loading 
    const [loading, setLoading] = useState(false)

    // clicked card detail
    const [ProductDetail, setProductDetail] = useState([])

    // cart item array
    const [cart, setCart] = useState([])

    // modlal detail
    const [modalDetail, setModalDetail] = useState([])

    // get data from local storage
    let localstorageData = JSON.parse(localStorage.getItem("productData"))

    if (ProductDetail.length === 0 && localstorageData) {
        setProductDetail(localstorageData)
    }


    // fetch data from public api

    let getApiData = async (page) => {
        setLoading(true)
        let fetchData = await fetch(`https://fakestoreapi.com/products${page}`)
        let res = await fetchData.json()
        setCardArr(res)
        setLoading(false)
    }

    useEffect(() => {
        let authToken = localStorage.getItem("authToken")

        getApiData("/")
        if (authToken) {
            setUserLogin(true)
        } else {
            setUserLogin(false)
        }
    }, [])




    // add to cart
    let addItem = (pin, que, check, radio) => {

        let copyProduct = JSON.parse(JSON.stringify(ProductDetail))

        if (check) {
            copyProduct.pincode = pin
            copyProduct.qun = que
            radio ? copyProduct.payment = "Cash on deliverys" : copyProduct.payment = "Online payment"

            let add = 0
            if (cart.length === 0) {
                setCart(cart.concat(copyProduct))
            }
            cart.map((e) => {
                e.id === copyProduct.id ? add += 1 : add = add
            })
            !add && setCart(cart.concat(copyProduct))
        }

    }


    // remove item
    let removeItem = (id) => {
        let filterArr = cart.filter((e) => {
            return e.id !== id
        })
        setCart(filterArr)
    }


    return (
        <AppContext.Provider value={{ cardArr, ProductDetail, setProductDetail, getApiData, userLogin, setUserLogin, addItem, cart, removeItem, loading, setLoading, modalDetail, setModalDetail }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
