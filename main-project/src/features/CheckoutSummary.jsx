import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart, selectTotal } from '../redux/cartSlice'

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCart)
  const total = useSelector(selectTotal)
  return (
    <div>
      <h1>Checkout Summary</h1><hr className='border mt-3 me-3 border-gray-500 mb-2 '/>
      <ul className='me-3'>
        {cartItems.map((cart,index)=> <li className='border-2 p-2 rounded-lg' key={index}>
          <p><b>{cart.name}</b><br/>
          Price:${cart.sellingPrice}<br/>
          Quantity:{cart.qty}<br/>
          {cart.qty>1 && <>Total Price :${cart.qty*cart.sellingPrice}</>}</p>
        </li>)}
       
        <li className='border-2 p-2 flex justify-between rounded-lg'><span>Total :</span><span>${total}</span></li>
      </ul>
    </div>
  )
}

export default CheckoutSummary
