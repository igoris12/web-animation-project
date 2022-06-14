import React from 'react';

const ServicesItem = ({ col, icon }) => {
  return (
    <div className={'ServicesItem' + ' ' + col}>
      <span>{icon}</span>
      <h3>header</h3>
      <p>text</p>
    </div>
  );
};

export default ServicesItem;
