import { useState, useEffect } from 'react';
import React from 'react';

const SkillsItem = ({ title, value, inView }) => {
  const [skillsAnimation, setSkillAnimation] = useState(0);
  useEffect(() => {
    if (inView) setSkillAnimation(value);
  }, [inView]);

  return (
    <div className="SkillsItem">
      <h4 className="title sectionSecondaryHeader">{title}</h4>
      <div className="pregressBar">
        <span
          className="progress"
          style={{ right: `calc(100% - ${skillsAnimation}%)` }}
        ></span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

export default SkillsItem;
