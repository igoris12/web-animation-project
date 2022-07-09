import React from 'react';

const SkillsItem = ({ title, value }) => {
  return (
    <div className="SkillsItem">
      <h4 className="title sectionSecondaryHeader">{title}</h4>
      <progress style={{ background: 'red' }} value={value} max="100">
        {value}
      </progress>
    </div>
  );
};

export default SkillsItem;
