import React, { useContext } from 'react'
import { useState } from 'react'
const con1 = React.createContext()

const Contextdemo = ({children}) => {
    const [name,setName] =useState("Ram")
    const changeName =(n)=>setName(n)
  return (
    <con1.Provider value={{name,changeName}}>
        {children}
    </con1.Provider>
  )
}
export default Contextdemo

export const MyContext =()=>React.useContext(con1)
