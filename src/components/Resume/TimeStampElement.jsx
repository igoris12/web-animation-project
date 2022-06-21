import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';

const TimeStampElement = ({
  text = 'info text',
  title = 'title',
  location = 'location',
  from,
  to,
}) => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="TimeStampElement">
      <span className="to sectionParagraph">{to}</span>
      <span className="from sectionParagraph">{from}</span>
      <span className="line" style={{ backgroundColor: optionsState.color }}>
        <span
          className="circleTop"
          style={{ borderColor: optionsState.color }}
        ></span>
        <span
          className="circleBottom"
          style={{ borderColor: optionsState.color }}
        ></span>
      </span>
      <span className="content">
        <h4 className="sectionSecondaryHeader">{title}</h4>
        <h5 style={{ color: optionsState.color }}>{location}</h5>
        <p className="info sectionParagraph">{text}</p>
      </span>
    </div>
  );
};

export default TimeStampElement;
