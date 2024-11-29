import React, { useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { selectId } from '../redux/authSlice'
import { EMPTY_CART, selectCart, selectTotal } from '../redux/cartSlice'
import { saveorder } from './hiddenlinks'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const userId =useSelector(selectId)
  const cartItems = useSelector(selectCart)
  const total = useSelector(selectTotal)
  const dispatch = useDispatch()
  const navigate  =useNavigate()
  const [shippingAddress,setShippingAddress] = useState({name:"",email:"",mobile:"",city:"",address:"",postalcode:""})
  const [paymentMethod,setPaymentMethod] =useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
   let {name,email,mobile,city,address,postalcode} = shippingAddress
   if(!name || !email || !mobile || !city ||!address ||!postalcode || !paymentMethod){
    toast.error("please fill all the fields");return
   }
   if(paymentMethod =="cod"){
    //order placed , status set, empty cart
    saveorder({userId,shippingAddress,cartItems,total,status:"in progress",paymentMethod:"cod"})
    dispatch(EMPTY_CART())
    navigate('/thankyou')
   }
   else if(paymentMethod=="online"){}
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mx-14 mt-14 shadow-md p-5'>
      <CheckoutSummary/>
      <div>
        <h1>Checkout Details</h1>
        <hr className='border mt-3 me-3 border-gray-500'/>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={shippingAddress.name} onChange={(e)=>setShippingAddress({...shippingAddress,name:e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.email} onChange={(e)=>setShippingAddress({...shippingAddress,email:e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"  value={shippingAddress.mobile} onChange={(e)=>setShippingAddress({...shippingAddress,mobile:e.target.value})}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter name"  value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress,city:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-700 font-medium mb-2">
                postalcode
              </label>
              <input
                type="text"
                name="postalcode"
                placeholder="Enter email"  value={shippingAddress.postalcode} onChange={(e)=>setShippingAddress({...shippingAddress,postalcode:e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
              <input type="radio" name="payment" className='me-2 mt-4' onChange={(e)=>setPaymentMethod("cod")} checked={paymentMethod=="cod"}/>
              <label htmlFor="brand" className=" text-gray-700 font-medium mb-2">
                Cash on Delivery
              </label>
            </div>
            <div>
              <input type="radio" name="payment" className='me-2 mt-4' onChange={()=>setPaymentMethod("online")} checked={paymentMethod=="online"}/>
              <label htmlFor="brand" className=" text-gray-700 font-medium mb-2">
                Pay Online
              </label>
            </div>
          <div className="flex justify-between">
                <button type="submit" className="mt-8 w-full bg-red-600 text-white py-1 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200 me-2">
                    Place Order
                  </button>
                  <button className={`mt-8 w-full bg-indigo-600 text-white py-1 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200 
                `}>
                    Cancel
                  </button></div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
