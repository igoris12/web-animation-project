import { useState, useEffect, useContext } from 'react';
import React from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { useInView } from 'react-intersection-observer';
import CountUp from '../Base/CountUp';

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
        >
          <span className="value">
            {inView ? <CountUp start={0} end={value} tiem={2000} /> : 0}%
          </span>

          <span
            className="poiner"
            style={{ borderBottom: `15px solid ${optionsState.color}` }}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default SkillsItem;
