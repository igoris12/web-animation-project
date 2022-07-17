import React from 'react';
import Header from '../Base/Header';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';
import { BsNewspaper } from 'react-icons/bs';

const Resume = () => {
  return (
    <section className="resume">
      <Header text="My resume." icon={<BsNewspaper />} />
      <ExperienceAndEducation />
      <Skills />
    </section>
  );
};

export default Resume;
