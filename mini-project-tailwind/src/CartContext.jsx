import React, { useState } from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
const cart = React.createContext()
const CartContext = ({children}) => {
const [cartItems,setCartItem] =useState([])
const [total,setTotal] =useState(0)

const addtocart=(product)=>{
  if(sessionStorage.getItem('2ndaug-mini') ==null){
    toast.error("please login first");return
  }
    const itemIndex =  cartItems.findIndex((item)=>item.id==product.id)//index or -1
    if(itemIndex==-1){
        setCartItem([...cartItems,{...product,qty:1}])
        toast.success(`${product.title} added to cart`)
    }
  else toast.info(`${product.title} already7 added to cart`) 
}
const increment=(product)=>{
    const itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
    if(product.stock > cartItems[itemIndex].qty) cartItems[itemIndex].qty++
    else toast.info(`only ${product.stock} qty available`)
    setCartItem([...cartItems])
}
const decrement=(product)=>{
    const itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
    if(cartItems[itemIndex].qty>1) cartItems[itemIndex].qty--
    else cartItems[itemIndex].qty=1
    setCartItem([...cartItems])
}
const remove_from_cart=(id)=>{
  // const itemIndex =  cartItems.findIndex((item)=>item.id==id)
  // cartItems.splice(itemIndex,1)
  // setCartItem([...cartItems])

  const filters = cartItems.filter(item=>item.id != id)
  setCartItem([...filters])
}
const emptycart=()=>{ setCartItem([]);setTotal(0)}
const calculate_total=()=>{
  let t = cartItems.reduce((prev,curr)=>{return prev+curr.qty*curr.price},0)
  setTotal(t)
}
  return (
    <cart.Provider value={{cartItems,total,addtocart,increment,decrement,remove_from_cart,emptycart,calculate_total}}>
        {children}
    </cart.Provider>
  )
}

export default CartContext
export const useCart = ()=>useContext(cart)