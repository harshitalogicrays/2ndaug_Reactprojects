import React, { Component } from 'react'

export default class UsersList extends Component {
    constructor(props) {
      super(props)
      this.state = {   users:[]  }
    }
    componentDidMount(){  this.getUsers() }

    getUsers=async()=>{
        try{    
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await res.json()
            this.setState({users:data})
        }   
        catch(err){console.log(err)}
    }
  render() {
    return (
      <div>
        <div  class="table-responsive"  >
            <table class="table table-primary"  >
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th>email</th><th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.length==0 && <tr><td colspan={5}>No User Found</td></tr>}
                    {this.state.users.map((user,i)=>
                    <tr key={user.id}>
                        <td scope="row">{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        
      </div>
    )
  }
}
