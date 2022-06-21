import React from 'react';
import Header from '../Base/Header';
import { BsNewspaper } from 'react-icons/bs';
import ExperienceAndEducation from './ExperienceAndEducation';
const Resume = () => {
  return (
    <section className="resume">
      <Header text="My resume." icon={<BsNewspaper />} />
      <ExperienceAndEducation />
    </section>
  );
};

export default Resume;
