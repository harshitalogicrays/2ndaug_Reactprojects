import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectEmail, selectId } from '../redux/authSlice'
import { EMPTY_CART, selectCart, selectTotal } from '../redux/cartSlice'
import { selectShippingAddress } from '../redux/checkoutSlice'
import { useNavigate } from 'react-router-dom'
import { saveorder, sendmail } from './hiddenlinks'

const PaymentForm = ({clientsecret}) => {
    const stripe = useStripe()
    const elements =  useElements()  

    const userId =useSelector(selectId)
    const email = useSelector(selectEmail)
    const cartItems = useSelector(selectCart)
    const total = useSelector(selectTotal)
    const shippingAddress = useSelector(selectShippingAddress)
    const dispatch = useDispatch()
    const navigate  =useNavigate()
    const handleSubmit=async()=>{
        if(!stripe || !elements){
            toast.error("Stripe is not initialized");return
        }
        try{
            const cardelement = elements.getElement(CardElement)
        await stripe.confirmCardPayment(clientsecret,{ payment_method:{card:cardelement}
         }).then((result)=>{
            if(result.paymentIntent.status=="succeeded"){
                toast.success("payment done")
                //save order
                saveorder({userId,shippingAddress,cartItems,total,status:"in progress",paymentMethod:"online",email})
                sendmail({amount:total,email,name:shippingAddress.name,payment:"online",status:"in progress"})
                dispatch(EMPTY_CART())
                navigate('/thankyou')
             }
             else if(result.error){toast.error("payment failed")}
   
         })
        }
        catch(err){
            toast.error("An error occured during payment")
        }
    }
  return (
    <div className='mt-5'>
      <CardElement   
               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    <button type="button" onClick={handleSubmit} className='mt-2 w-full bg-indigo-600 text-white py-1 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200 '>Pay Now</button>
    </div>
  )
}

export default PaymentForm
