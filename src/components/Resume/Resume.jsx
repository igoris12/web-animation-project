import React from 'react';
import Header from '../Base/Header';
import { BsNewspaper } from 'react-icons/bs';
const Resume = () => {
  return (
    <section className="resume">
      <Header text="My resume." icon={<BsNewspaper />} />
    </section>
  );
};

export default Resume;
