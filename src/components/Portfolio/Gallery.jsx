import React, { useContext } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';

const Gallery = () => {
  const { galleryData } = useContext(GalleryDataContext);
  //   console.log(galleryData);
  return (
    <div className="gallery container-fluid">
      <div className="row">
        <ul className="col-12">
          <li>Gallery item</li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
