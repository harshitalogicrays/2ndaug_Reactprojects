import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../redux/cartSlice'
import { BsTrash } from 'react-icons/bs'

const Cart = () => {
  const cartItems = useSelector(selectCart)
  return (
    <div className='container mt-5 shadow p-3'>
      <h1>Cart Page</h1>
      <div  class="table-responsive" >
        <table class="table table-bordered table-striped table-hover" >
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th>Price</th>
              <th>Quantity</th><th>Total Price</th><th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length==0 && <tr><td colspan={7}>No Item in cart</td></tr>}
            {cartItems.map((c,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{c.title}</td>
              <td><img src={c.images[0]} height={50} width={50}/></td>
              <td>${c.price}</td>
              <td>
                <div className="input-group">
                  <button type="button" className='btn btn-primary'>-</button>
                  <input type="text" value={c.qty}  className="form-control" style={{width:'20px',textAlign:'center'}}/>
                  <button type="button" className='btn btn-primary'>+</button>
                </div>
              </td>
              <td>${c.price * c.qty}</td>
              <td><button type="button" className='btn btn-danger'><BsTrash/></button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
  <div className="row">
    <div className="col-9">
      <button type="button" class="btn btn-danger btn-lg" > Empty Cart </button>
    </div>
    <div className="col">
      <h5>Total:<span class="float-end">$</span></h5><hr/>
      <div class="d-grid gap-2">
        <button  type="button" class="btn btn-warning" >
          Checkcout
        </button>
      </div>
      
    </div>
  </div>
    </div>
  )
}

export default Cart
