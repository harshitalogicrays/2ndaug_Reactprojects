import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/cartSlice'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleCart=()=>{
    dispatch(ADD_TO_CART(product))
  }
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
            <button className='btn btn-primary' type="button" onClick={handleCart}>Add to cart</button>
        </div>
    </div>
    </div>
  )
}

export default ProductCard
