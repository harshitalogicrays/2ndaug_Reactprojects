import React from 'react'

const CustomButton = ({type="button",cls="btn btn-secondary",disabled=false,id="",name="",click,value,...props}) => { //rest parameter
    //props:{}
  return (
   <>
   {value ? 
   <input type={type} className={cls}  value={value}/>
    :
    <button type={type} className={cls} disabled={disabled} onDoubleClick={props.onDoubleClick} {...props}>{props.children ? props.children : "Click Me "}</button>
}
   
    </>
  )
}

export default CustomButton
