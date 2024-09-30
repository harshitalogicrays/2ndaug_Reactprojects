// import { Component } from "react";
// class Firstclasscomp extends Component{
//     render(){
//         return (
//             <div>
//                 <h3>My first class comp</h3>
//             </div>
//         )
//     }
// }
// export default Firstclasscomp

//rcc
import React, { Component, Fragment } from 'react'
export default class Firstclasscomp extends Component {
  render() {
    return (
      <Fragment>
          <h3>My first class comp</h3>
      </Fragment>
    )
  }
}
