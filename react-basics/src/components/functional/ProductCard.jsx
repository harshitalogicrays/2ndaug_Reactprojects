import React from 'react'
import { MyButton } from '../../customcsscomp'

const ProductCard = ({product}) => {
  return (
    <div className='col-3 mb-3'>
    <div className="card">
        <img src={product.images[0]} alt="" className="card-img-top" style={{height:'180px'}} />
        <div className="card-body">
            <h5>{product.title}   
              <span className='float-end'>{product.stock >0 ? <span  class="badge rounded-pill text-bg-success" >In stock</span >
             : <span  class="badge rounded-pill text-bg-danger" >Out of stock</span >}</span>
             </h5>
            <h6>{product.category}</h6>
            <p>${product.price}</p>
            <MyButton type="button">Add to cart</MyButton>
        </div>
    </div>
    </div>
  )
}

export default ProductCard
