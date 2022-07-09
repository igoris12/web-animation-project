import React from 'react';

const SkillsItem = ({ title, value }) => {
  return (
    <div className="SkillsItem">
      <h4 className="title sectionSecondaryHeader">{title}</h4>
      <progress value={value} max="100">
        <span>{value}</span>
      </progress>
    </div>
  );
};

export default SkillsItem;
