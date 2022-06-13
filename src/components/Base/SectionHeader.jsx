import React from 'react';

const SectionHeader = ({ text, col = 'col-12' }) => {
  return <h2 className={col}>{text}</h2>;
};

export default SectionHeader;
