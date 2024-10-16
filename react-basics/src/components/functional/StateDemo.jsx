import React, { useState } from 'react'

const StateDemo = () => {
    // let result=0
    let [result,setResult]=React.useState('')
    let [num1]=useState(2)
    let [num2]=useState(3)

    let handleAdd = ()=>{    
        setResult(num1+num2) // result =num1+num2
    //  /   console.log(result)
    }
  return (
    <>
    <button type="button"  className="btn btn-primary me-2" onClick={handleAdd}> 
            Add</button>
    {result !='' && <h2>Addition of {num1} and {num2} is {result}</h2>}
    </>
  )
}

export default StateDemo


