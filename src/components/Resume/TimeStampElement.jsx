import React from 'react';

const TimeStampElement = ({
  text = 'info text',
  title = 'title',
  location = 'location',
  from,
  to,
}) => {
  return (
    <div className="TimeStampElement">
      <span className="to sectionParagraph">{to}</span>
      <span className="from sectionParagraph">{from}</span>
      <span className="line" style={{ backgroundColor: '#007aff' }}>
        <span className="circleTop" style={{ borderColor: '#007aff' }}></span>
        <span
          className="circleBottom"
          style={{ borderColor: '#007aff' }}
        ></span>
      </span>
      <span className="content">
        <h4 className="sectionSecondaryHeader">{title}</h4>
        <h5>{location}</h5>
        <p className="info sectionParagraph">{text}</p>
      </span>
    </div>
  );
};

export default TimeStampElement;
