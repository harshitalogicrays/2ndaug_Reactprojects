import React, { Component } from 'react'

export default class Lifecycleemethods extends Component {
    constructor(props) {
      super(props)
        console.log("constructor called")
      this.state = { username:'Ram',address:'ahmedabad'}
      this.timer=0
      this.data=''
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedstateFromProps called")
        return state //{ username:'Ram',address:'ahmedabad'}
    }

    componentDidMount(){ console.log("componentDidMount called")
        this.data = setInterval(()=>{this.timer++;console.log("Settimeoutcalled",this.timer);},4000)
    }
    changeName=()=>{ 
        console.log("changename called")
        this.setState({username:'Meera'})
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        if(nextState.username != this.state.username)
            return true
     return false
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
        localStorage.setItem("Timer",this.timer)
        this.timer=0
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
        clearInterval(this.data)
    }
  render() {console.log("render called")
    return (
     <>
        <h1>{this.state.username}</h1>
        <button  type="button" class="btn btn-primary" onClick={this.changeName}>
            Change Name
        </button>
        
     </>
    )
  }

}
