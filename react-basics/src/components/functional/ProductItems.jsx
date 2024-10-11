import React from 'react'
import ProductCard from './ProductCard'

const ProductItems = ({products}) => {
  return (
    <div className='container-fluid'>
        {products.length==0 && <h1>No Product Found</h1>}

    <div className="row">
        {products?.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
    </div>
  )
}

export default ProductItems
