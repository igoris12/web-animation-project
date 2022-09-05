import React, { useContext } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const { galleryData } = useContext(GalleryDataContext);
  return (
    <div className="gallery container-fluid" id="portfolioGallery">
      <div className="row">
        <ul className="col-12 gridBox">
          {galleryData.map((data) => (
            <GalleryItem key={data.id} project={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
