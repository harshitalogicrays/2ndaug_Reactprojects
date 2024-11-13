import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'

const Products = () => {
  let [products,setProducts]=useState([])
  let getData = async()=>{
    try{
      let res =  await fetch("https://dummyjson.com/products")
      let data =  await res.json()
      // console.log(data)
      setProducts(data.products)
      }
      catch(err){
          console.log(err)
      }
  }

  useEffect(()=>{getData()},[]) // only onload

  return (
  <>
    <ProductItems products={products}/>
  </>
  )
}

export default Products
