import React from 'react';

import { GrDocumentText, GrImage } from 'react-icons/gr';

import { BsFillCameraVideoFill } from 'react-icons/bs';

function GalleryItem({ project }) {
  return (
    <div className="galleryItem">
      <h2>{project.title}</h2>
      {project.tools.map((data, index) => (
        <span key={index}>{data + ' '}</span>
      ))}
      <span>
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
