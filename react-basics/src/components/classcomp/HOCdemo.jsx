import React, { Component } from 'react'
import UsersList from './UsersList'
import HOCLogic from './HOCLogic'
import HOCDisplay from './HOCDisplay'

const Users= HOCLogic(HOCDisplay,{url:"https://jsonplaceholder.typicode.com/users",heading:'Users Data',columns:['id','name','username','email','phone']})

const Posts= HOCLogic(HOCDisplay,{url:"https://jsonplaceholder.typicode.com/posts",heading:'Posts Data',columns:['id','userId','title','body']})

export default class HOCdemo extends Component {
  render() {  return (  <div>
        {/* <UsersList/> */}
        <Users/>
        <Posts/>
      </div>
    )
  }
}
