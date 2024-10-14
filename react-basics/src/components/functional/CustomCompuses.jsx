import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { BsEmojiDizzyFill } from 'react-icons/bs'
import InputBox from './InputBox'
const CustomCompuses = () => {
  const [email,setEmail]=useState('ram@gmail.com')
  return (
   <>
    {/* <CustomButton type="button" cls="btn btn-danger"
    disabled={true}
    id=""
    name=""
    click=""

    >Childrenprops</CustomButton>

    <CustomButton cls="btn btn-info" 
    onDoubleClick={()=>alert("double click called")}
    style={{marginLeft:'20px'}}><BsEmojiDizzyFill/></CustomButton>


    <CustomButton value="input button"></CustomButton> */}

    <InputBox value={email} change1={ (e)=> setEmail(e.target.value)}/>


    <InputBox type="password" value={12345}  className="mt-3" append={true} prepend={true} prependIcon="@"><button type="button" className="btn btn-primary mt-3">Show</button></InputBox>
   </>
  )
}

export default CustomCompuses
