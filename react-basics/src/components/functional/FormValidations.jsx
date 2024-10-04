import React, { useState } from 'react'
import Image1 from "../../assets/images/register.png"
import { BsEye, BsEyeSlash } from 'react-icons/bs'
const FormValidations = () => {
    let [user,setUser] =useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({})
    let [show,setShow]=useState(false)

    let checkusername=()=>{
        if(user.username==''){
            setErrors((prevErrors)=>({...prevErrors,usernameerr:"Username is required"}));
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,usernameerr:""}));return true
        } 
    }

    let checkemail=()=>{
        let pat = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.email==''){
            setErrors((prevErrors)=>({...prevErrors,emailerr:"Email is required"}));
            return false
        }
        else if(!pat.test(user.email)){
            setErrors((prevErrors)=>({...prevErrors,emailerr:"Invalid Email"}));
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,emailerr:""}));return true
        } 
    }
    let checkpassword=()=>{
        if(user.password==''){
            setErrors((prevErrors)=>({...prevErrors,pwderr:"Password is required"}));
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,pwderr:""}));return true
        } 
    }

    let checkcpassword=()=>{
        if(user.cpassword=='' || user.password != user.cpassword){
            setErrors((prevErrors)=>({...prevErrors,cpwderr:"Password not match"}));
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,cpwderr:""}));return true
        } 
    }

    const handleSubmit=(e)=>{ e.preventDefault()
        let u1 =checkusername();let e1 = checkemail(); let p1=checkpassword();let c1=checkcpassword()
        if(u1 && e1 && p1 && c1){
            console.log(user)
        }
        else e.preventDefault()
}

    let styles = {color:'red',backgroundColor:'lightblue',textDecoration:'underline'}
  return (
    <div className='container shadow p-2 mt-5'>
        <h1 style={{color:"brown",textAlign:"center"}}>Form Validations</h1><hr/>
        <h2 style={styles}>erlekjltkj</h2>
        <p style={styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam iusto, sapiente repellendus, odit corporis ab laboriosam quaerat reiciendis eaque, doloremque sequi earum repudiandae tempora! Dolorem nobis rem ad optio!</p>
    <div className="row">
        <div className="col-4">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Username</label>
                    <input type="text" name="username"  class="form-control" value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    onBlur={checkusername}/>
                    {errors?.usernameerr && <span className="text-danger">{errors.usernameerr}</span>}
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input type="text" name="email"  class="form-control" value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})} onBlur={checkemail}/>
                    {errors?.emailerr && <span className="text-danger">{errors.emailerr}</span>}
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Password</label>
                    <div className="input-group">
                    <input type={show ? "text" :"password"} name="password"  class="form-control" value={user.password} onBlur={checkpassword}
                    onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    <button type="button" class="btn btn-primary" onClick={()=>setShow(!show)}>
                        {show==false ? <BsEyeSlash/> :<BsEye/>}
                    </button>
                    </div>
                     {errors?.pwderr && <span className="text-danger">{errors.pwderr}</span>}
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Confirm Password</label>
                    <input type="password" name="cpassword"  class="form-control" value={user.cpassword} onBlur={checkcpassword}
                    onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                    {errors?.cpwderr && <span className="text-danger">{errors.cpwderr}</span>}
                </div>
            <button type="submit" class="btn btn-primary" > Submit </button>
            
            </form>
        </div>
    </div>
    </div>
  )
}

export default FormValidations

