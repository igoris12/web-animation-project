import React from 'react'

function Textarea({name, id , cols= 30, rows= 10 ,width='100%'}) {
  return (
    <div className='textarea' style={{ width: width }}>
      <textarea name={name} id={id} cols={cols} rows={rows}   ></textarea>
      <label>Your comment</label>
    </div>
  )
}

export default Textarea
