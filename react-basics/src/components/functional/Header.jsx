import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const funlinks = [
    {id:1,text:'First Fun Comp',path:'/fun/first'},
    {id:2,text:'props',path:'/fun/props'},
    {id:3,text:'event',path:'/fun/event'},
    {id:4,text:'state',path:'/fun/state'},
    {id:5,text:'form demo',path:'/fun/form'},
    {id:6,text:'form validations',path:'/fun/form/validations'},
    {id:7,text:'rhf',path:'/fun/form/rhf'},
    {id:8,text:'custom comp',path:'/fun/custom'},
    {id:9,text:'list',path:'/fun/list'},
    {id:10,text:'useCallback and useRef',path:'/fun/callback'},
    {id:11,text:'useMemo hook',path:'/fun/memo'},
    {id:12,text:'useRef hook',path:'/fun/ref'}
  ]
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to='/' 
          className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"} to="/products">Products</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Functional Components
          </a>
          <ul className="dropdown-menu">
            {funlinks.map((link,i)=><React.Fragment key={link.id}>
              <li><NavLink  className = {({isActive})=>isActive?"dropdown-item text-danger bg-info fw-bold":"dropdown-item"} to={link.path} end>{link.text}</NavLink></li>
              {i < funlinks.length-1 && <li><hr className="dropdown-divider"/></li> }
              </React.Fragment>
          )}
          </ul>
        </li>
        <li className="nav-item">
        <NavLink  className = {({isActive})=>isActive?"nav-link text-danger bg-info fw-bold":"nav-link"} to="/class">Class Component</NavLink>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <div className="input-group">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit"><BsSearch/></button></div>
      </form>
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
