import { useState } from 'react';
import React from 'react';

const SkillsItem = ({ title, value }) => {
  const [skillsAnimation, setSkillAnimation] = useState(0);

  return (
    <div className="SkillsItem">
      <h4 className="title sectionSecondaryHeader">{title}</h4>
      <div className="pregressBar">
        <span
          className="progress"
          style={{ right: `calc(100% - ${value}%)` }}
        ></span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

export default SkillsItem;
