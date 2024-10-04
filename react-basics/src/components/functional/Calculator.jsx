import React, { useState } from 'react'

const Calculator = () => {
    let [num1,setNum1]=useState()
    let [num2,setNum2]=useState(2)
    let [result,setResult]=useState('')

    let handleCal=(op)=>{
        if(op=='+'){setResult((parseInt(num1)+parseInt(num2)))}
        else if(op=='-'){setResult(num1-num2)}
    }
  return (
  <div className='container shadow p-3 col-6'>
    <h1>Calculator</h1><hr/>
        <div class="mb-3">
            <label for="" class="form-label">Num1</label>
            <input type="text" name="num1"  class="form-control" value={num1} onChange={(e)=>{
                console.log(e.target.value)
                setNum1(e.target.value)
            }}/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Num2</label>
            <input type="text" name="num2"  class="form-control" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        </div>
        <button type="button" class="btn btn-primary me-3" onClick={()=>handleCal('+')}> Add </button>
        <button type="button" class="btn btn-primary" onClick={()=>handleCal('-')}> Subtract </button>
        <br/>
        <h3>{result}</h3>
  </div>
  )
}

export default Calculator
