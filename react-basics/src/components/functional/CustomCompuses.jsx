import React from 'react'
import CustomButton from './CustomButton'
import { BsEmojiDizzyFill } from 'react-icons/bs'

const CustomCompuses = () => {
  return (
   <>
    <CustomButton type="button" cls="btn btn-danger"
    disabled={true}
    id=""
    name=""
    click=""

    >Childrenprops</CustomButton>

    <CustomButton cls="btn btn-info" 
    onDoubleClick={()=>alert("double click called")}
    style={{marginLeft:'20px'}}><BsEmojiDizzyFill/></CustomButton>


    <CustomButton value="input button"></CustomButton>
   </>
  )
}

export default CustomCompuses
