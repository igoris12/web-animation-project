import React, { useContext, useState } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import {
  BsImage,
  BsFillFileEarmarkTextFill,
  BsFillCameraVideoFill,
} from 'react-icons/bs';
import portfolio from '../../images/Portfolio/Projects/portfolio.png';
import snakeGame from '../../images/Portfolio/Projects/snakeGame.png';
import vintedCopy from '../../images/Portfolio/Projects/vintedCopy.png';
import slider3d from '../../images/Portfolio/Projects/slider3d.png';
import simpleForm from '../../images/Portfolio/Projects/simpleForm.png';
import webProject from '../../images/Portfolio/Projects/webProject.png';


function GalleryItem({ project }) {
  const { optionsState } = useContext(OptionsContext);

  const getImage = (image) => {
    switch (image) {
      case 'portfolio':
        return portfolio;
      case 'snakeGame':
        return snakeGame;
      case 'vintedCopy':
        return vintedCopy;
      case 'slider3d':
        return slider3d;
      case 'simpleForm':
        return simpleForm;
      case 'webProject':
        return webProject;
      default:
        return;
    }
  };

  let tools = '';
  const [cursorPoint ,setCursorPoint] = useState({x: 20, y:20});
  project.tools.forEach(element => {
    tools += element + ' ';
  });
 
  const glowHandeler = (e) => {

    setCursorPoint({x: e.clientX - 300, y: e.clientY - 250 })
  console.log(e);
  }

  return (
    <li
    onMouseMove={glowHandeler}
    className={'galleryItem '  + tools + project.layout }
    >
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
      <img src={getImage(project.img)} alt="Project" />
      <span
      
        className="hoverEffect"
        style={{ backgroundColor: optionsState.color }}
      >
      </span>
      <div 
       data-x={cursorPoint.x}
       data-y={cursorPoint.y}
       style={{top: cursorPoint.y - 150 + 'px', left: cursorPoint.x - 150 + 'px'}}
      className="glowEffect"></div>
      <h2 className="sectionSecondaryHeader">{project.title}</h2>
      <span className="tools sectionParagraph ">
        {project.tools.map((data, index) => (
          <span key={index}>{data + ' '}</span>
        ))}
      </span>
      <span className="icon">
        {project.type === 'doc' ? (
          <BsFillFileEarmarkTextFill />
        ) : project.type === 'img' ? (
          <BsImage />
        ) : (
          <BsFillCameraVideoFill />
        )}
      </span>
    </li>
  );
}

export default GalleryItem;
