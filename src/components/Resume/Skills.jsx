import React from 'react';
import SectionHeader from '../Base/SectionHeader';
import SkillsItem from './SkillsItem';

const Skills = ({ inView }) => {
  return (
    <section className="skills container-fluid">
      <div className="row">
        <div className="design col-12 col-lg-6">
          <SectionHeader text="Design skills" />
          <ul>
            <SkillsItem title="Coral Draw" value={91} />
            <SkillsItem title="Photoshop" value={82} />
            <SkillsItem title="illustrator" value={94} />
          </ul>
        </div>
        <div className="coding col-12 col-lg-6">
          <SectionHeader text="Coding skills" />
          <ul>
            <SkillsItem title="HTML 5" value={83} />
            <SkillsItem title="CSS3" value={75} />
            <SkillsItem title="Javascript" value={92} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
