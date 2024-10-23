import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends Component {
    classlinks=[
        {id:1,text:'First Class Comp',url:'/class/first'},
        {id:2,text:'Props',url:'/class/props'},
        {id:3,text:'event and state',url:'/class/event/state'},
        {id:4,text:'Form in class Comp',url:'/class/form'},
        {id:5,text:'Ref in class Comp',url:'/class/ref'},
        {id:6,text:'pure comp',url:'/class/pure'},
        {id:7,text:'class Comp lifecycle method',url:'/class/lifecycle'},
        {id:8,text:'Higher Order Component',url:'/class/hoc'},
        {id:9,text:'Error Boundary',url:'/class/error'},
    ]
  render() {
    return (
      <nav className='nav flex-column'>
         {this.classlinks.map((link,i)=><React.Fragment key={link.id}>
              <li><NavLink  className = {({isActive})=>isActive?"nav-item text-danger bg-info text-decoration-none fw-bold":"nav-item text-dark text-decoration-none"} to={link.url} end>{link.text}</NavLink></li>
              {i < this.classlinks.length-1 && <li><hr/></li> }
              </React.Fragment>
          )}
      </nav>
    )
  }
}
