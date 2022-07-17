import { useState, useEffect, useContext } from 'react';
import React from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { useInView } from 'react-intersection-observer';

const SkillsItem = ({ title, value }) => {
  const { optionsState } = useContext(OptionsContext);
  const [skillsAnimation, setSkillAnimation] = useState(0);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) setSkillAnimation(value);
  }, [inView]);

  return (
    <div ref={ref} className="SkillsItem">
      <h4 className="title sectionSecondaryHeader">{title}</h4>
      <div className="pregressBar">
        <span
          className="progress"
          style={{
            right: `calc(100% - ${skillsAnimation}%)`,
            backgroundColor: optionsState.color,
          }}
        ></span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

export default SkillsItem;
