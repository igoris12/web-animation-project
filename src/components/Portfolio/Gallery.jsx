import React, { useContext } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { galleryData } = useContext(GalleryDataContext);
  //   console.log(galleryData);
  return (
    <div className="gallery container-fluid">
      <div className="row">
        <ul className="col-12">
          {galleryData.map((data) => (
            <GalleryItem key={data.id} project={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
