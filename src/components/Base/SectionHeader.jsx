import React from 'react';

const SectionHeader = ({ text, col = '' }) => {
  return (
    <h2 className={'SectionHeader' + ' ' + col}>
      {text}
      <span className="left"></span>
      <span className="right"></span>
    </h2>
  );
};

export default SectionHeader;
