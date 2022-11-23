
import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';
import PortfolioPopup from './PortfolioPopup';
import Showcase from './Showcase';

const Gallery = ({disableScrollHandler}) => {
  const { galleryData } = useContext(GalleryDataContext);
  const [showcaseActive, setShowcaseActive] = useState({class: ''});
  const [portfolioPopupSettings, setPortfolioPopupSettings] = useState({showPopup: false, data: {}});

  const hidePopup = () => {
    setPortfolioPopupSettings({...portfolioPopupSettings, showPopup: false });

  }
  const openPopup = (data) => {
    setPortfolioPopupSettings({...portfolioPopupSettings, showPopup: true, data: data });
    
  }
  function showcaseOpen () {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: 'active'});
  }
  function showcaseClose () {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: ''});
  }

  return (
    <div className="gallery container-fluid" id="portfolioGallery">
      <div className="row">
        <ul  className="col-12 gridBox">
          {galleryData.map((data) => (
            <GalleryItem key={data.id} project={data} openDetails={openPopup}  />
            ))}
        </ul>
        <Showcase options={showcaseActive} showcaseClose={showcaseClose}/>
        <PortfolioPopup showPopup={portfolioPopupSettings.showPopup} closeFunction={hidePopup}  data={portfolioPopupSettings.data}/>
      </div>
    </div>
  );
};

export default Gallery;
