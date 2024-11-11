import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [user,setUser] =useState({email:'',password:''})
  const redirect  =  useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!user.email || !user.password){toast.error("invalid credentials");return}
    try{
     const res =  await fetch(`https://6731a9c07aaf2a9aff1172ac.mockapi.io/users?email=${user.email}`)
      const data =  await res.json()
      if(data[0].password == user.password){
        let obj = {isLoggedIn:true,username:data[0].username,email:data[0].email}
       
        sessionStorage.setItem('2ndaug-mini',JSON.stringify(obj))

        toast.success("loggedIn Successfully")
        redirect('/')
      }
      else{toast.error("invalid credentials") }
    }
    catch(err){toast.error(err.message)}
  }
  return (
    <div className='flex justify-center items-center mt-7'>
    <form className='w-full max-w-md mt-7' onSubmit={handleSubmit}>
      <h1 className='block text-2xl font-bold text-center mb-7 text-indigo-800'>Login</h1>
    
      <div className="mb-3">
        <label htmlFor="" className="block mb-3">Email</label>
        <input type="text" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md" 
         value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block mb-3">Password</label>
        <input type="password" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md" 
         value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      </div>
     
      <button type="submit" className="w-full border bg-indigo-800 text-white rounded-md py-1 hover:bg-indigo-700">Login</button>
    </form>
  </div>
  )
}

export default Login
