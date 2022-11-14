import React from 'react'

function PortfolioPopup({data, clickTest}) {
  return (
    <div onClick={clickTest} className='portfolioPopup'>
       some text for test {data.title}
    </div>
  )
}

export default PortfolioPopup
