import React from 'react'

function Textarea({name, id , cols= 30, rows= 10 ,width='100%'}) {
  return (
    <div className='textarea'>
      <textarea name={name} id={id} cols={cols} rows={rows}   style={{ width: width }}></textarea>
      <label>Your comment</label>
    </div>
  )
}

export default Textarea
