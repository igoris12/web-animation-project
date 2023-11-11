import React from 'react'

function ConctactInfoItem({icno, text}) {
  return (
    <div className='contactInfoItem'>
    <span className='icon'>{icno}</span>
     <p>{text}</p>
    </div>
  )
}

export default ConctactInfoItem
