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
  return (
    <div className="galleryItem">
      <img src={portfolio} alt="Project image" />
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
