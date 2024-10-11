import React from 'react'
import products from '../../assets/productlist'
import ProductItems from './ProductItems'

const Products = () => {
  return (
  <>
    <ProductItems products={products}/>
  </>
  )
}

export default Products
