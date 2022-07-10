import React from 'react';
import Header from '../Base/Header';
import { BsNewspaper } from 'react-icons/bs';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';
const Resume = () => {
  // const handleScroll = (event) => {};
  return (
    <section className="resume" onScroll={handleScroll}>
      <Header text="My resume." icon={<BsNewspaper />} />
      <ExperienceAndEducation />
      <Skills />
    </section>
  );
};

export default Resume;
