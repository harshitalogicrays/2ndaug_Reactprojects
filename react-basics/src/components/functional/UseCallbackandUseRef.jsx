import React, { useCallback, useEffect, useState } from 'react'

const UseCallbackandUseRef = () => {
    let [number,setNumber]=useState('')
    let [length,setLength]=useState(10)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    // let randomNumbers = ()=>{
    //     let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' //52 
    //     if(numAllowed) str+='0987654321'
    //     if(charAllowed) str+='!@#$%^&*()_+=-.'

    //     let data =''
    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length)) //(52) => 0 to 51 => 51,3,34,11
    //     }
    //     setNumber(data)
    // }

    let randomNumbers = useCallback( ()=>{
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' //52 
        if(numAllowed) str+='0987654321'
        if(charAllowed) str+='!@#$%^&*()_+=-.'

        let data =''
        for(let i=1;i<=length;i++){
            data += str.charAt(Math.floor(Math.random()*str.length)) //(52) => 0 to 51 => 51,3,34,11
        }
        setNumber(data)
    },[length,numAllowed,charAllowed])

    React.useEffect(()=>{
        randomNumbers()
    },[length,numAllowed,charAllowed])

    let copyRef = React.useRef()
    let handleCopy=()=>{
        // document.getElementById('num').style.color="red"
        // window.navigator.clipboard.writeText(number)
        // document.getElementById('num').select()

        window.navigator.clipboard.writeText(number)
        alert(copyRef.current.value)
        copyRef.current.style.fontSize='30px'
        copyRef.current.select()
    }
    useEffect(()=>{
            // document.getElementById('num').focus()
            copyRef.current.focus()
    },[])
  return (
    <div className='container mt-5 col-6'>
    <div className="input-group">
        <input type="text" className="form-control" value={number} id="num" ref={copyRef}/>
        <button type="button" class="btn btn-primary" onClick={handleCopy}>Copy </button>
    </div>
    <div className="row">
        <div className="col-6">
            <input type="range" min="5" max="100" value={length} onChange={(e)=>setLength(e.target.value)}/>
            Length({length})
        </div>
        <div className="col">
            <input type="checkbox" className='me-2' onChange={()=>setNumAllowed(!numAllowed)}/><label>Numbers</label>
        </div>
        <div className="col">
            <input type="checkbox" className='me-2' onChange={()=>setCharAllowed(!charAllowed)}/><label>Special</label>
        </div>
    </div>
    </div>
  )
}

export default UseCallbackandUseRef
