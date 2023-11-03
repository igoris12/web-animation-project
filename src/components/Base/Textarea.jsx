import React from 'react'

function Textarea({name, id , cols= 30, rows= 10 , width='100%' ,placeholder}) {
  return (
    <div className='textarea' style={{ width: width }}>
      <textarea placeholder={placeholder} name={name} id={id} cols={cols} rows={rows}   ></textarea>
      <label>{placeholder}</label>
    </div>
  )
}

export default Textarea
