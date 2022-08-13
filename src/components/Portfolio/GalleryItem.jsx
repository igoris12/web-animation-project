import React from 'react';
import { GrDocumentText, GrImage } from 'react-icons/gr';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import portfolio from '../../images/Portfolio/Projects/portfolio.png';
import snakeGame from '../../images/Portfolio/Projects/snakeGame.png';
import vintedCopy from '../../images/Portfolio/Projects/vintedCopy.png';
import slider3d from '../../images/Portfolio/Projects/slider3d.png';
import simpleForm from '../../images/Portfolio/Projects/simpleForm.png';
import webProject from '../../images/Portfolio/Projects/webProject.png';

function GalleryItem({ project }) {
  const getImage = (image) => {
    switch (image) {
      case 'portfolio':
        return portfolio;
        break;
      case 'snakeGame':
        return snakeGame;
        break;
      case 'vintedCopy':
        return vintedCopy;
        break;
      case 'slider3d':
        return slider3d;
        break;
      case 'simpleForm':
        return simpleForm;
        break;
      case 'webProject':
        return webProject;
        break;
      default:
        return;
    }
  };
  return (
    <div className="galleryItem">
      <img src={getImage(project.img)} alt="Project image" />
      <h2 className="sectionSecondaryHeader">{project.title}</h2>
      <span className="tools sectionParagraph ">
        {project.tools.map((data, index) => (
          <span key={index}>{data + ' '}</span>
        ))}
      </span>
      <span className="icon">
        {project.type == 'doc' ? (
          <GrDocumentText />
        ) : project.type == 'img' ? (
          <GrImage />
        ) : (
          <BsFillCameraVideoFill />
        )}
      </span>
    </div>
  );
}

export default GalleryItem;
