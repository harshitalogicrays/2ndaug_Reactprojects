import React from 'react'
import { BsCart, BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectCart } from '../redux/cartSlice'

const Header = () => {
  // const cartitems = useSelector((state)=>state.cart.cartItems)
  const cartitems = useSelector(selectCart)
  return (
 <>
 <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"} aria-current="page" to='/'>Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"} to='/products'>Products</NavLink>
        </li>
     
      </ul>
      <form class="d-flex" role="search">
        <div className="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit"><BsSearch/></button>
        </div>
      </form>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item me-3 ms-3" style={{position:'relative'}}>
          <NavLink className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"} aria-current="page" to='/cart'><BsCart size={25}/>
          <span class="badge rounded-pill text-bg-danger" style={{position:'absolute',fontSize:'10px'}}>{cartitems.length}</span >
          
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </>
  )
}

export default Header
