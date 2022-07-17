import React, { useEffect } from 'react';
import SectionHeader from '../Base/SectionHeader';
import SkillsItem from './SkillsItem';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} className="skills container-fluid">
      <div className="row">
        <div className="design col-12 col-lg-6">
          <SectionHeader text="Design skills" />
          <ul>
            <SkillsItem title="Coral Draw" value={91} inView={inView} />
            <SkillsItem title="Photoshop" value={82} inView={inView} />
            <SkillsItem title="illustrator" value={94} inView={inView} />
          </ul>
        </div>
        <div className="coding col-12 col-lg-6">
          <SectionHeader text="Coding skills" />
          <ul>
            <SkillsItem title="HTML 5" value={83} inView={inView} />
            <SkillsItem title="CSS3" value={75} inView={inView} />
            <SkillsItem title="Javascript" value={92} inView={inView} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
