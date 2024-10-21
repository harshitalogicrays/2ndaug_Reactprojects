import React, { Component } from 'react'

export default class EventandStateinclass extends Component {
  constructor(props) {
    super(props) //calling Component (Parent) class construtor 
    this.state = {count:'',num1:0,num2:1,result:'',users:[],product:{id:'',name:''}}
  }
  handleClick = ()=>{alert("hello from handleclick")}
  handleAdd = (a,b)=>alert(a+b)
  counter=()=>{ 
    this.setState({count:parseInt(this.state.count+1)})
  }
  render() { return ( <>
     <button type="button"  class="btn btn-primary me-2" onClick={()=>alert("button clicked")}> click Me </button>
     
    <button type="button"  class="btn btn-primary me-2" onClick={this.handleClick}>Button </button>

    <button type="button"  class="btn btn-primary me-2" onClick={()=>this.handleAdd(2,3)}> Add</button>

    
    <button type="button"  class="btn btn-primary me-2" onClick={this.counter}>Counter </button>
    <h1>{this.state.count}</h1>

    <div className='container shadow p-3 col-6'>
    <h1>Calculator</h1><hr/>
        <div class="mb-3">
            <label for="" class="form-label">Num1</label>
            <input type="text" name="num1"  class="form-control" value={this.state.num1}
            onChange={(e)=>this.setState({num1:e.target.value})}/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Num2</label>
            <input type="text" name="num2"  class="form-control" value={this.state.num2}
            onChange={(e)=>this.setState({num2:e.target.value})}/>
        </div>
        <button type="button" class="btn btn-primary me-3" onClick={()=>this.setState({result:parseInt(this.state.num1)+parseInt(this.state.num2)})}> Add </button>
        <button type="button" class="btn btn-primary" onClick={()=>this.setState({result:parseInt(this.state.num1)-parseInt(this.state.num2)})}> Subtract </button>
        <br/>
        <h3>{this.state.result}</h3>
  </div>
     </>
    )
  }
}
