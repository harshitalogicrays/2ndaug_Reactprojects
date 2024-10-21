import React, { useEffect, useRef, useState } from 'react'
import UseRefChildren from './UseRefChildren'
import ForwardRefDemo from './ForwardRef'

const UseRefDemo = () => {
    const [name]=useState("Ram")
    const input = useRef()
    const countRef = useRef()
    const innerRef=  useRef()
    useEffect(()=>{input.current.focus()},[])
  return (  <>
    <div className='input-group'>
      <input type="text" className='form-control' ref={input}/>
      <button type="button" className='btn btn-primary' onClick={()=>alert(input.current.value)}>Get Value</button>
    </div>
    <hr/>
    {/* <div className='input-group'>
    <button type="button" className='btn btn-primary' onClick={()=>countRef.current.value>1?countRef.current.value--:countRef.current.value=1}>-</button>
      <input type="text"  ref={countRef} style={{width:'40px',textAlign:'center'}}
      defaultValue={1} />
      <button type="button" className='btn btn-primary' onClick={()=>countRef.current.value++}>+</button>
    </div> */}

{/* <div className='input-group'>
      <input type="text"  ref={countRef} style={{width:'40px',textAlign:'center'}}
      defaultValue={1} />
    <UseRefChildren name={name} count={countRef}/>
    </div> */}
    {/* count is holding countRef and count is nothing but a prop */}

    <ForwardRefDemo name={name} ref={innerRef}/>

    {/* ref is not prop here, it is holding reference of ForwardRefDemo comp */}
    </>
  )
}

export default UseRefDemo
