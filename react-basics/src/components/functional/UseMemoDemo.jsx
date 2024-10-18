import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
    let [count,setCount]=useState(1)
    let [show,setShow] =useState(false)
    let calculate = (c)=>{
        console.log("calculate called")
        for(let i=1;i<=1000000000;i++){}
        return c
    }
    // let data  =  calculate(count)
    let data = useMemo(()=>{return calculate(count)},[count])
  return (
    <div>
      <button type="button"  class="btn btn-primary" onClick={()=>setCount(count+1)}>
        Counter
      </button>
      <h1>{data}</h1>
      <button type="button"  class="btn btn-primary" onClick={()=>setShow(!show)}>
        {show?"show":"hide"}
      </button>
    </div>
  )
}

export default UseMemoDemo
