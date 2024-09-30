import React from 'react'

const PropsandEventinfun = ({rollno=101,fname,lname,...props}) => {
  //props={address:"",mobile:""}
  return (
  <>
    <h1>{fname} {lname}</h1>
    <h2>{rollno}</h2>
    <h3>{props.address}</h3>
  </>
  )
}

export default PropsandEventinfun
