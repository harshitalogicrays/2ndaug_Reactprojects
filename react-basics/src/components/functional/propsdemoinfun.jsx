import React from 'react'
import PropsandEventinfun from './PropsandEventinfun'
import Firstfuncomp from './Firstfuncomp'

const Propsdemoinfun = (props) => {
    console.log(props)
    // props.username = "Happy" //Cannot assign to read only property 'username'
  return (
    <>
        <h1>Props demo</h1>
        {/* <h2>{props.username}</h2>
        <h3>{props.mobile}</h3>
        {props.isActive ? 
        <>User is Active</>  : "User is not Active"}
        <hr/>
        {props.isActive && <>Welcome {props.email}</>} */}

        <PropsandEventinfun fname="Happy" lname="Singh" rollno={111} address="rtet" mobile={988}>
            <h1>Hello h1</h1>
            <Firstfuncomp/>
        </PropsandEventinfun>
    </>
  )
}

export default Propsdemoinfun
