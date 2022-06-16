import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';

const ServicesItem = ({ col, icon, title, text }) => {
  const { optionsState } = useContext(OptionsContext);

  return (
    <div className={'ServicesItem' + ' ' + col}>
      <span className="icon" style={{ color: optionsState.color }}>
        {icon}
      </span>
      <h3 className="sectionSecondaryHeader">{title}</h3>
      <p className="sectionParagraph">{text}</p>
    </div>
  );
};

export default ServicesItem;
