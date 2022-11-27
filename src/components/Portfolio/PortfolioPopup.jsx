import React, { useContext} from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';
import defaultImg from '../../images/Portfolio/Projects/portfolio.png';
import OptionsContext from '../../reducers/OptionsContext';
import vintedCopy1 from '../../images/Portfolio/Projects/vintedCopy.png';
import vintedCopy2 from '../../images/Portfolio/Projects/vintedCopy2.png';

import simpleForm1 from '../../images/Portfolio/Projects/simpleForm.png';
import simpleForm2 from '../../images/Portfolio/Projects/simpleForm2.png';



function PortfolioPopup({data = { a:'a'}, showPopup , closeFunction}) {
  const { optionsState } = useContext(OptionsContext);
  function getTools (toolsArray) {
    let string = ' ';
    
    toolsArray.forEach((element, index) => {
      index !== 0 ? string += `, ${element}`: string += `${element}`;
    })

    return string;
  }

  return (
    <div className={showPopup === true ? 'portfolioPopup active' : 'portfolioPopup'}>
      <div className="popUpheader"><RiCloseCircleFill onClick={closeFunction}/></div>
      <div className="content">
        <h4 className="title sectionSecondaryHeader">{data.title}</h4>
        <p className="description sectionParagraph">{data.description}</p>
        <div className="info">
          <ul>
            <li><span style={{color: optionsState.color}}>Client: </span> {data.client}</li>
            <li><a href={data.link} target="_blank" rel="noreferrer"><span style={{color: optionsState.color}}>Website: </span> github.com/igoris12</a></li>
            <li><span style={{color: optionsState.color}}>Tools: </span>{getTools(data.tools)}</li>
          </ul>
        </div>
        <ul className="imagis">
          <figure className="imgContainer">
            <img src={data.images[0] === "vintedCopy1" ?  vintedCopy1 : data.images[0] === 'simpleForm1'? simpleForm1 : defaultImg} alt="Project" />
          </figure>
          <figure className="imgContainer">
            <img src={data.images[1] === "vintedCopy2" ?  vintedCopy2 : data.images[1] === 'simpleForm2'? simpleForm2 : defaultImg} alt="Project" />
          </figure>

        </ul>
      </div>
    </div>
  )
}

export default PortfolioPopup
