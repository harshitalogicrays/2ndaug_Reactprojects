import React, { Component, createRef } from 'react'

export default class Refdemoinclass extends Component {
    constructor(props) {
      super(props)
      this.state = { username:'' }
      this.myRef = React.createRef()
      this.innerRef = createRef()
    }
    componentDidMount(){
        this.myRef.current.focus()
    }
  render() {
    console.log("render called")
    return (
      <div>
         <input type="text" className='form-control' value={this.state.username}
         onChange={(e)=>this.setState({username:e.target.value})}/>
         
          <input type="text" className='form-control' ref={this.myRef}/>
      <button type="button" className='btn btn-primary' onClick={()=>alert(this.myRef.current.value)}>Get Value</button>
  
      </div>
    )
  }
}
