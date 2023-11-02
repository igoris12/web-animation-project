import React from 'react'

function Input({name}) {
  return (
    <div className='input'>
      <input  type="text" placeholder='inout' name={name} />
      <label htmlFor={name}>name</label>
    </div>
  )
}

export default Input
