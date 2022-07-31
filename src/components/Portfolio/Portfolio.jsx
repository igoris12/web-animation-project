import React from 'react';
import Header from '../Base/Header';
import { BsBriefcase } from 'react-icons/bs';
const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header text="Portfolio." icon={<BsBriefcase />} />
    </section>
  );
};

export default Portfolio;
