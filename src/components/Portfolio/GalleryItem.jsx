import React, { useContext } from 'react';
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


function GalleryItem({ project, openDetails }) {
  const { optionsState } = useContext(OptionsContext);
  let tools = '';
  project.tools.forEach(element => {
    tools += element + ' ';
  });
  
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

  const clickHandler = (functionsList , data)=> {
    data.type === 'video' ? functionsList.openVideoShowcase() : data.type === 'img' ?
     functionsList.openShowcase() : functionsList.openPopup(data) 
  }
  return (
    <li
    className={'galleryItem grid-item '  + tools + project.layout }
    onClick={()=> clickHandler(openDetails, project)}
    
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
