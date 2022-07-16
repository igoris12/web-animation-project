import React from 'react';
import Header from '../Base/Header';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';
import { BsNewspaper } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  console.log(inView);
  return (
    <section className="resume">
      <Header text="My resume." icon={<BsNewspaper />} />
      <ExperienceAndEducation />
      <Skills ref={ref} inView={inView} />
    </section>
  );
};

export default Resume;
