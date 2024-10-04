import React, { useState } from 'react'
import Image1 from "../../assets/images/a.jpg"
const Form2 = () => {
    let [user,setUser] =useState({username:'',email:'',password:'',cpassword:''})
    const handleSubmit=(e)=>{ e.preventDefault()
        console.log(user)
    }
  return (
    <div className='container mt-5'>
    <div className="row">
        <div className="col-4">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Username</label>
                    <input type="text" name="username"  class="form-control" value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input type="text" name="email"  class="form-control" value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Password</label>
                    <input type="password" name="password"  class="form-control" value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Confirm Password</label>
                    <input type="password" name="cpassword"  class="form-control" value={user.cpassword}
                    onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                </div>
            <button type="submit" class="btn btn-primary" > Submit </button>
            
            </form>
        </div>
    </div>
    </div>
  )
}

export default Form2
