import React from 'react';

const ServicesItem = ({ col, icon, title, text }) => {
  return (
    <div className={'ServicesItem' + ' ' + col}>
      <span className="icon">{icon}</span>
      <h3 className="sectionSecondaryHeader">{title}</h3>
      <p className="sectionParagraph">{text}</p>
    </div>
  );
};

export default ServicesItem;
