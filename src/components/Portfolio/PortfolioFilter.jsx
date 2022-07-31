import React, { useContext, useState } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
const PortfolioFilter = () => {
  const { optionsState } = useContext(OptionsContext);

  const [active, setActive] = useState(0);

  const filtering = (filterNum) => {
    if (filterNum !== active) {
      setActive(filterNum);
    }
  };
  return (
    <div className="portfolioFilter container-fluid">
      <div className="row">
        <div className="col-12">
          <ul>
            <li
              style={active === 0 ? { background: optionsState.color } : null}
              className={
                active === 0 ? 'sectionParagraph active' : 'sectionParagraph'
              }
              onClick={() => filtering(0)}
            >
              All
            </li>
            <li
              style={active === 1 ? { background: optionsState.color } : null}
              className={
                active === 1 ? 'sectionParagraph active' : 'sectionParagraph'
              }
              onClick={() => filtering(1)}
            >
              React
            </li>
            <li
              style={active === 2 ? { background: optionsState.color } : null}
              className={
                active === 2 ? 'sectionParagraph active' : 'sectionParagraph'
              }
              onClick={() => filtering(2)}
            >
              JavaScript
            </li>
            <li
              style={active === 3 ? { background: optionsState.color } : null}
              className={
                active === 3 ? 'sectionParagraph active' : 'sectionParagraph'
              }
              onClick={() => filtering(3)}
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
