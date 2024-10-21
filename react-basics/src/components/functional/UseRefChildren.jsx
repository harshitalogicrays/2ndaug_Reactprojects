import React from 'react'

const UseRefChildren = ({name,count}) => {
  return (
   <>
      <button type="button" className='btn btn-primary' onClick={()=>count.current.value++}>+</button>
   </>
  )
}

export default UseRefChildren
