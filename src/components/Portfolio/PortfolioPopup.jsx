import React, {useState, useContext} from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';
import img1 from '../../images/Portfolio/Projects/snakeGame.png';
import OptionsContext from '../../reducers/OptionsContext';

function PortfolioPopup({data = {}, showPopup, closeFunction}) {
  const { optionsState } = useContext(OptionsContext);
  

  return (
    <div className={showPopup === true ? 'portfolioPopup active' : 'portfolioPopup'}>
      <div className="popUpheader"><RiCloseCircleFill onClick={closeFunction}/></div>
      <div className="content">
        <h4 className="title sectionSecondaryHeader">Project name</h4>
        <p className="description sectionParagraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis veniam repellendus ex? Cum accusantium ea qui maiores molestias eaque, nihil quasi ad reiciendis quis assumenda corporis eius ipsam eum inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt in fuga at reprehenderit labore, quam aliquam libero natus magni!</p>
        <div className="info">
          <ul>
            <li><span style={{color: optionsState.color}}>Client: </span> Themeforest</li>
            <li><span style={{color: optionsState.color}}>Website: </span> envato.com</li>
            <li><span style={{color: optionsState.color}}>Tools: </span> web, creative, photography</li>
          </ul>
        </div>
        <ul className="imagis">
          <figure className="imgContainer">
            <img src={img1} alt="Project" />
          </figure>
          <figure className="imgContainer">
            <img src={img1} alt="Project" />
          </figure>

        </ul>
      </div>
    </div>
  )
}

export default PortfolioPopup
