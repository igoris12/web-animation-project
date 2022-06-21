import React from 'react';

const TimeStampElement = () => {
  return (
    <div className="TimeStampElement">
      <span className="to sectionParagraph">2022</span>
      <span className="from sectionParagraph">2021</span>
      <span className="line" style={{ backgroundColor: '#007aff' }}>
        <span className="circleTop" style={{ borderColor: '#007aff' }}></span>
        <span
          className="circleBottom"
          style={{ borderColor: '#007aff' }}
        ></span>
      </span>
      <span className="content">
        <h4 className="sectionSecondaryHeader">header</h4>
        <h5>header nr2</h5>
        <p className="info sectionParagraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          accusamus.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </span>
    </div>
  );
};

export default TimeStampElement;
