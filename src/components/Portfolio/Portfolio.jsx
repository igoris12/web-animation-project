import React from 'react';
import Header from '../Base/Header';
import { BsBriefcase } from 'react-icons/bs';
import PortfolioFilter from './PortfolioFilter';
import Gallery from './Gallery';
const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header text="Portfolio." icon={<BsBriefcase />} />
      <PortfolioFilter />
      {/* <Gallery /> */}
    </section>
  );
};

export default Portfolio;
