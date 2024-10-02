import React from 'react'
import Image1 from "../../assets/images/a.jpg"
const Form1 = () => {
  return (
    <div className='container mt-5'>
    <div className="row">
        <div className="col-4">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
            <form>
            <div class="mb-3">
                <label for="" class="form-label">Username</label>
                <input type="text" name="username"  class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" name="email"  class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" name="password"  class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword"  class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary" > Submit </button>
            
            </form>
        </div>
    </div>
    </div>
  )
}

export default Form1
