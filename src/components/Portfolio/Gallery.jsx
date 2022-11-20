
import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import GalleryItem from './GalleryItem';
import PortfolioPopup from './PortfolioPopup';
import Showcase from './Showcase';

const Gallery = ({disableScrollHandler}) => {
  const { galleryData } = useContext(GalleryDataContext);
  const [showcaseActive, setShowcaseActive] = useState({class: ''});
  const [portfolioPopupData, setPortfolioPopupData] = useState({active: true, data: {title: 'A'}});

  function showcaseOpen () {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: 'active'});
  }
  function showcaseClose (e) {
    disableScrollHandler();
    setShowcaseActive({...showcaseActive, class: ''});
  }

  function clickTest (e) {
    portfolioPopupData.data.title === 'A' ? setPortfolioPopupData({...portfolioPopupData, data: {title: 'B'}}) 
    :
     setPortfolioPopupData({...portfolioPopupData, data: {title: 'A'}});
    //  e.target.classList.toggle('active')
    // document.getElementsByClassName('page')[0].classList.toggle('moveToSide');
    
    
    
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
        <PortfolioPopup clickTest={clickTest} data={portfolioPopupData.data}/>
      </div>
    </div>
  );
};

export default Gallery;
