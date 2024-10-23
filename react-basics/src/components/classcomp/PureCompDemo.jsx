import React, { Component, PureComponent } from 'react'
//rpc
export default class PureCompDemo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'Ram'
      }
    }
    changeName=()=>{ 
        console.log("changename called")
        this.setState({username:'Meera'})
    }
  render() { console.log("render called")
    return (
      <div>
        <button type="button" className='btn btn-primary' onClick={this.changeName}>Change Username</button>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
