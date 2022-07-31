import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
const PortfolioFilter = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="portfolioFilter container-fluid">
      <div className="row">
        <div className="col-12">
          <ul>
            <li
              style={{ background: optionsState.color }}
              className="sectionParagraph active"
            >
              All
            </li>
            <li
              style={{ background: optionsState.color }}
              className="sectionParagraph active"
            >
              React
            </li>
            <li
              style={{ background: optionsState.color }}
              className="sectionParagraph active"
            >
              JavaScript
            </li>
            <li
              style={{ background: optionsState.color }}
              className="sectionParagraph active"
            >
              Sass
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
