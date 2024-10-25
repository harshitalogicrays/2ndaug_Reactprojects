import React, { Component } from 'react'

const HOCLogic = (WrappedComponent,InputData) => { //InputData={url:''}
  return class extends Component{
    constructor(props) {
      super(props);  this.state = { data:[],input:InputData} }
    componentDidMount(){  this.getData() }
    getData=async()=>{
        try{    
            let res = await fetch(InputData.url)
            let data1 = await res.json()
            this.setState({data:data1})  }   
        catch(err){console.log(err)}  }
    render(){
        return(<>  <WrappedComponent data ={this.state.data}
        input = {this.state.input}  />
        </>) }
  }
}

export default HOCLogic
