import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState('')
    let handleIncrease=()=>{
        setCount(parseInt(count+1)) //count = count+1
    }
    let handleDecrease=()=>{
        if(count>1)setCount((prevCount)=>parseInt(prevCount-1))
        else setCount(1)
    }
  return (
   <>
     <button type="button" class="btn btn-primary me-2" onClick={handleIncrease}> Increase by 1</button>
     <button type="button" class="btn btn-primary" onClick={handleDecrease}> Decrease by 1</button>
     
        <h2>{count}</h2>
   </>
  )
}

export default Counter
