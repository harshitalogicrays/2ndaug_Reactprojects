import React, { Component } from 'react'

export default class HOCDisplay extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.input.heading}</h1>
      <div  class="table-responsive"  >
          <table class="table table-primary"  >
              <thead>
                  <tr>
                     {this.props.input.columns.map((c,i)=><th key={i}>{c}</th>)}
                  </tr>
              </thead>
              <tbody>
                {this.props.data.length == 0 && 
              <tr><td colSpan={this.props.input.columns.length}>No Data Found</td></tr>}
              {this.props.data.map((d,i)=> <tr key={i}>
              {this.props.input.columns.map((c,i)=><td key={i}>{d[c]}</td>)}
              </tr>)}
              
              </tbody>
          </table>
      </div>
      
    </div>
    )
  }
}
