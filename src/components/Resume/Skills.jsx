import React from 'react';
import SectionHeader from '../Base/SectionHeader';

const Skills = () => {
  return (
    <section className="skills container-fluid">
      <div className="row">
        <div className="design col-12 col-lg-6">
          <SectionHeader text="Design skills" />
        </div>
        <div className="coding col-12 col-lg-6">
          <SectionHeader text="Coding skills" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
