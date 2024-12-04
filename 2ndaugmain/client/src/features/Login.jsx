import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import { LOGIN_USER } from '../redux/authSlice'

const Login = () => {
  const [user,setUser] =useState({email:'',password:''})
  const [isLoading,setIsLoading] = useState(false)
  const redirect  =  useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  // console.log(location)
  const redirectURL = location.state ? location.state.to : '/'
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    if(!user.email || !user.password){toast.error("invalid credentials");return}
    try{
     const res =  await fetch(`${import.meta.env.VITE_BASE_URL}/users?email=${user.email}`)
      const data =  await res.json()
      if(data[0].password == user.password){
        if(data[0].role=="0"){
          redirect('/admin')
        }
        else if(data[0].role=="1"){
          // redirect('/')
          redirect(redirectURL)
        }
        let obj = {isLoggedIn:true,username:data[0].username,email:data[0].email,id:data[0].id,role:data[0].role}
        sessionStorage.setItem("2ndauglogin",JSON.stringify(obj))
        dispatch(LOGIN_USER(obj))
       toast.success("loggedIn Successfully")
        setIsLoading(false)
      
      }
      else{toast.error("invalid credentials");setIsLoading(false) }
    }
    catch(err){toast.error(err.message)}
    setIsLoading(false)
  }
  return (
    <>
    {isLoading && <Loader/>}
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
  </>
  )
}

export default Login
