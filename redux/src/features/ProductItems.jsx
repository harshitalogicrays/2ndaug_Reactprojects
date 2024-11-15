import React from 'react'
import ProductCard from './ProductCard'

const ProductItems = ({products}) => {
  return (
    <>
        {products.length==0 && <h1>No Product Found</h1>}
      <div className="row">
          {products?.map((product)=><ProductCard key={product.id} product={product}/>)}
      </div>
      </>
  )
}

export default ProductItems
