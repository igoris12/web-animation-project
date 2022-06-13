import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';

const Header = ({ text, icon }) => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="sectionHeader container-fluid">
      <div className="sectionHeaderContainer row">
        <h1 className="col-12" style={{ color: optionsState.color }}>
          {text}
          <span>{icon}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
