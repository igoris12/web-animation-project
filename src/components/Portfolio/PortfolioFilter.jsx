import React, { useContext, useState } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import data from './data/portfolioData';
const PortfolioFilter = () => {
  const { optionsState } = useContext(OptionsContext);

  const [active, setActive] = useState('All');
  const [galleryData, setGalleryData] = useState(data);
  const filtering = (filter) => {
    if (filter !== active) {
      setActive(filter);
    }
    setGalleryData(datafilter(filter));
  };

  const datafilter = (filter) => {
    if (filter !== 'All') {
      return data.filter((proejct) => proejct.tools.includes(filter));
    } else {
      return data;
    }
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
