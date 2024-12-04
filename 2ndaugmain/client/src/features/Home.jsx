import React, { useEffect } from 'react'
import Carousel from './Carousel'
import Products from './Products'
import ProductCard from './ProductCard'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
  const products = useLoaderData()
  // let getData = async()=>{
  //   try{
  //     const res  = await fetch(`http://localhost:4000`,{
  //       method:"POST",
  //       headers:{'content-type':'application/json'},
  //       body:JSON.stringify({name:"Ram"})
  //     })
  //     const data  = await res.json()
  //     console.log(data)
  //   }
  //   catch(err){console.log("something went wrong")
  //   }
  // }
  // useEffect(()=>{getData()},[])
  return (
    <>
      <Carousel/>
      <ProductCard products={products}/>
    </>
  )
}

export default Home
