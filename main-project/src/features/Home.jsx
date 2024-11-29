import React from 'react'
import Carousel from './Carousel'
import Products from './Products'
import ProductCard from './ProductCard'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
  const products = useLoaderData()
  return (
    <>
      <Carousel/>
      <ProductCard products={products}/>
    </>
  )
}

export default Home
