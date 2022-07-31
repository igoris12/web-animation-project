import React from 'react';
import Header from '../Base/Header';
import { BsBriefcase } from 'react-icons/bs';
import PortfolioFilter from './PortfolioFilter';
const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header text="Portfolio." icon={<BsBriefcase />} />
      <PortfolioFilter />
    </section>
  );
};

export default Portfolio;
