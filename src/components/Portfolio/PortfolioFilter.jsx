import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import OptionsContext from '../../reducers/OptionsContext';

const PortfolioFilter = () => {
  const { optionsState } = useContext(OptionsContext);
  const { galleryDatadispatch } = useContext(GalleryDataContext);
  const [active, setActive] = useState('All');


  return (
    <div className="portfolioFilter container-fluid">
      <div className="row">
        <div className="col-12">
          <ul className='portfolio-nav'>
            <li
              // style={
              //   active === 'All' ? { background: optionsState.color } : null
              // }
              className='sectionParagraph active'
              data-filter='*'
            >
              All
            </li>
            <li
              // style={
              //   active === 'React' ? { background: optionsState.color } : null
              // }
              className='sectionParagraph'
              data-filter='.React'
            >
              React
            </li>
            <li
              // style={
              //   active === 'JavaScript'
              //     ? { background: optionsState.color }
              //     : null
              // }
              className='sectionParagraph'
              data-filter='.JavaScript'
            >
              JavaScript
            </li>
            <li
              // style={
              //   active === 'SASS' ? { background: optionsState.color } : null
              // }
              className='sectionParagraph'
              data-filter='.SASS'
            >
              SASS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
