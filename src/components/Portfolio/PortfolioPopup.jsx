import React from 'react'

function PortfolioPopup({data = 0, clickTest = ()=> console.log('cliked')}) {
  return (
    <div  onClick={clickTest} className='portfolioPopup active'>
       some text for test {data.title}
    </div>
  )
}

export default PortfolioPopup
