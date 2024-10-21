import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default class ClassLayout extends Component {
  render() {
    return (
      <div className='row'>
            <div className="col-2"><Sidebar/></div>
            <div className="col"><Outlet/></div>

      </div>
    )
  }
}
