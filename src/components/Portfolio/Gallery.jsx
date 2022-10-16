
import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';
import Showcase from './Showcase';

const Gallery = ({disableScrollHandler}) => {
  const { galleryData } = useContext(GalleryDataContext);
  const [showcaseActive, setShowcaseActive] = useState({class: '', image: 1});

  function showcaseOpen (e) {
    disableScrollHandler();
    setShowcaseActive({class: 'active', image: 1});
  }
  function showcaseClose (e) {
    disableScrollHandler();
    setShowcaseActive({class: '', image: 1});
  }
  return (
    <div className="gallery container-fluid" id="portfolioGallery">
      <div className="row">
        <ul  className="col-12 gridBox">
          {galleryData.map((data) => (
            <GalleryItem key={data.id} project={data} showcaseOpen={showcaseOpen}  />
          ))}
        </ul>
        <Showcase options={showcaseActive} showcaseClose={showcaseClose}/>
      </div>
    </div>
  );
};

export default Gallery;
