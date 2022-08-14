import React, { useContext, useState } from 'react';
import GalleryDataContext from '../../reducers/GalleryDataContext';
import OptionsContext from '../../reducers/OptionsContext';

const PortfolioFilter = () => {
  const { optionsState } = useContext(OptionsContext);
  const { galleryDatadispatch } = useContext(GalleryDataContext);
  const [active, setActive] = useState('All');
  const filtering = (filter) => {
    if (filter !== active) {
      setActive(filter);
    }
    galleryDatadispatch({
      type: 'FILTER',
      deploy: filter,
    });
  };

  return (
    <div className="portfolioFilter container-fluid">
      <div className="row">
        <div className="col-12">
          <ul>
            <li
              style={
                active === 'All' ? { background: optionsState.color } : null
              }
              className={
                active === 'All'
                  ? 'sectionParagraph active'
                  : 'sectionParagraph'
              }
              onClick={() => filtering('All')}
            >
              All
            </li>
            <li
              style={
                active === 'React' ? { background: optionsState.color } : null
              }
              className={
                active === 'React'
                  ? 'sectionParagraph active'
                  : 'sectionParagraph'
              }
              onClick={() => filtering('React')}
            >
              React
            </li>
            <li
              style={
                active === 'JavaScript'
                  ? { background: optionsState.color }
                  : null
              }
              className={
                active === 'JavaScript'
                  ? 'sectionParagraph active'
                  : 'sectionParagraph'
              }
              onClick={() => filtering('JavaScript')}
            >
              JavaScript
            </li>
            <li
              style={
                active === 'SASS' ? { background: optionsState.color } : null
              }
              className={
                active === 'SASS'
                  ? 'sectionParagraph active'
                  : 'sectionParagraph'
              }
              onClick={() => filtering('SASS')}
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