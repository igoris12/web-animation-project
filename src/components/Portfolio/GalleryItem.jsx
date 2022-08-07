import React from 'react';

function GalleryItem({ project }) {
  return (
    <div className="galleryItem">
      <h2>{project.title}</h2>
      {project.tools.map((data, index) => (
        <span key={index}>{data + ' '}</span>
      ))}
      <span>{project.type}</span>
    </div>
  );
}

export default GalleryItem;
