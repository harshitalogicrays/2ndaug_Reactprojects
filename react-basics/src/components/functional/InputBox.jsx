import React from 'react'

const InputBox = ({type="text",id="",name="",value="",placeholder="",required=false, isDisabled=false,
    change1,blur=()=>{}, maxLength=50,
    append=false,prepend=false,
    ...props}) => {
        console.log(change1)
  return (
   <>
    {append || prepend ?  
    <div className="input-group">
        <span className='input-group-text mt-3'>{props.prependIcon}</span>
    <input type={type} className={`form-control ${props.className}`}
        id={id} 
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={change1}
    />
   {props.children}
    </div>
    :
    <input type={type} className={`form-control ${props.className}`}
    id={id} 
    name={name}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
    value={value}
    onChange={change1} disabled={isDisabled}
/>
    }
   </>
  )
}

export default InputBox
