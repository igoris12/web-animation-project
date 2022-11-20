import React, {useState} from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';

function PortfolioPopup({data = 0, clickTest = ()=> console.log('cliked')}) {
  const [show, setShow] = useState(true);

  const closeFunction = () => {
    setShow(false)
  }

  return (
    <div  onClick={clickTest} className={show === true ? 'portfolioPopup active' : 'portfolioPopup'}>
      <div className="header"><RiCloseCircleFill onClick={closeFunction}/></div>
       some text for test {data.title}
    </div>
  )
}

export default PortfolioPopup
