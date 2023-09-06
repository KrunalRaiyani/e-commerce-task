import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import CartItem from './CartItem'

const CartContainer = () => {

    const context = useContext(AppContext)
    let {cart} = context

  return (
      <div className='container  mt-5'>
        {cart.length === 0&&<h5>No items to display plese add items</h5>}
        {
            cart.map((e)=>{
                return <CartItem key={e.id} id={e.id} image = {e.image} title={e.title} price={e.price}  category={e.category} quinetity = {e.qun} payment={e.payment} pincode={e.pincode} />
            })
        }

    </div>
  )
}

export default CartContainer