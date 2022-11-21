import React, {useState} from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';

function PortfolioPopup({data = {}}) {
  const [show, setShow] = useState(true);

  const closeFunction = () => {
    setShow(false)
  }

  return (
    <div className={show === true ? 'portfolioPopup active' : 'portfolioPopup'}>
      <div className="header"><RiCloseCircleFill onClick={closeFunction}/></div>
      <div className="content">
        <h4 className="title sectionSecondaryHeader">Project name</h4>
        <p className="description sectionParagraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis veniam repellendus ex? Cum accusantium ea qui maiores molestias eaque, nihil quasi ad reiciendis quis assumenda corporis eius ipsam eum inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt in fuga at reprehenderit labore, quam aliquam libero natus magni!</p>
        <div className="info">
          <ul>
            <li><span>Client:</span></li>
            <li><span>Website:</span></li>
            <li><span>Tools:</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPopup
