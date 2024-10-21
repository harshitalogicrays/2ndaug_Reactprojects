import React, { Component } from 'react'

export default class PropsinCLass extends Component {
  render() {
    let {username} =this.props
    return (
      <div>
        props demo
        <h1>{username}</h1>
        <h2>{this.props.isActive ?"Active user":"Inactive User"}</h2>
        {this.props.children}
      </div>
    )
  }
}

PropsinCLass.defaultProps={
  'username': "Ram"
}