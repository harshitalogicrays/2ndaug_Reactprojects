import React from 'react'

const EventDemo = () => {

   let handleClick = ()=>{alert("hello from handleclick")}
    let handleAdd = (a,b)=>alert(a+b)
  return (
   <>
    <button type="button"  class="btn btn-primary me-2" onClick={()=>alert("button clicked")}>
        click Me
    </button>
    
    <button type="button"  class="btn btn-primary me-2" onClick={handleClick}>Button </button>

    <button type="button"  class="btn btn-primary me-2" onClick={()=>handleClick()}> Button</button>

    <button type="button"  class="btn btn-primary me-2" onClick={()=>handleAdd(2,3)}> Add</button>
   </>
  )
}

export default EventDemo
