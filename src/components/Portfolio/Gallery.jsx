
import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';
import Showcase from './Showcase';

const Gallery = ({disableScrollHandler}) => {
  const { galleryData } = useContext(GalleryDataContext);
  const [showcaseActive, setShowcaseActive] = useState({class: ''});

  function showcaseOpen () {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: 'active'});
  }
  function showcaseClose (e) {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: ''});
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
