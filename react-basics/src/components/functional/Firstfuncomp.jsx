import { BsHouseLock, BsPersonCircle } from "react-icons/bs";
/*
function Firstfuncomp(){
    return <div>
          <p className="text-danger"> 
             My First Functional Component 
          </p>
          <BsPersonCircle />
          <BsHouseLock/>
        </div>
}
export default Firstfuncomp */


/*let Firstfuncomp=()=>{
    return <div>
          <p className="text-danger"> 
             My First Functional Component 
          </p>
          <BsPersonCircle />
          <BsHouseLock/>
        </div>
}
export default Firstfuncomp */


//rfce
/*import React from 'react'
function Firstfuncomp() {
  return (
    <div>
      
    </div>
  )
}
export default Firstfuncomp */

//rafc
import React from 'react'
import {  MyContext } from "../../contextdemo";
const Firstfuncomp = () => {
  const contextdata = MyContext()
  console.log(contextdata)
  // contextdata.changeName("Meera")
  return (
    <React.Fragment>
        <p className="text-danger"> 
             My First Functional Component 
          </p>
          <BsPersonCircle />
          <BsHouseLock/>
          <button type="button"
          onClick={()=>contextdata.changeName("Meera")}>CLick to chnageName</button>
          {contextdata.name}
    </React.Fragment>
  )
}
export default Firstfuncomp
















