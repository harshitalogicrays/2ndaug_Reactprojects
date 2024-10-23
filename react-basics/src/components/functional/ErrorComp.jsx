import React from 'react'

const ErrorComp = ({username}) => {
    // if(username=="Joker"){
    //     throw new Error('invalid name')
    // }
  return (
    <div>  <h1>{username}</h1>   </div>
  )
}

export default ErrorComp
