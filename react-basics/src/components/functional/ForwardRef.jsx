import React from 'react'

const ForwardRefDemo =React.forwardRef((props,ref) => {
  return (
    <div>
       <input type="text"  ref={ref}
      defaultValue={1} />
    </div>
  )
})

export default ForwardRefDemo
