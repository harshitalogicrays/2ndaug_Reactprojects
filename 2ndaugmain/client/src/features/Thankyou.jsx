import React from 'react'
import cssmod from './notfound.module.css'
import { Link } from 'react-router-dom'
const Thankyou = () => {
  return (
    <div className={cssmod.error} style={{color:'black'}}>
      <h1>thank you for ordering from us!!</h1>
      <h3><Link to='/'>Continue Shopping</Link></h3>
    </div>
  )
}

export default Thankyou
