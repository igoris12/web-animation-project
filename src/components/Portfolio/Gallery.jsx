
import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';
import PortfolioPopup from './PortfolioPopup';
import Showcase from './Showcase';

const Gallery = ({disableScrollHandler}) => {
  const { galleryData } = useContext(GalleryDataContext);
  const [showcaseActive, setShowcaseActive] = useState({class: ''});
  const [portfolioPopupData, setPortfolioPopupData] = useState({active: true, data: {title: 'A'}});
  const [showPopup, setShowPopup] = useState(true);

  const hidePopup = () => {
    setShowPopup(false)
  }

  const openPopup = () => {
    setShowPopup(true)
  }
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
            <GalleryItem key={data.id} project={data} showcaseOpen={openPopup}  />
            ))}
        </ul>
        <Showcase options={showcaseActive} showcaseClose={showcaseClose}/>
        <PortfolioPopup showPopup={showPopup} closeFunction={hidePopup}  data={portfolioPopupData.data}/>
      </div>
    </div>
  );
};

export default Gallery;
