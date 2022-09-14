import React from 'react';
import Header from '../Base/Header';
import { BsBriefcase } from 'react-icons/bs';
import PortfolioFilter from './PortfolioFilter';
import Gallery from './Gallery';
const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header text="Portfolio." icon={<BsBriefcase />} />
      {/* <PortfolioFilter /> */}
      {/* <Gallery /> */}
      <div
        class="grid"
        data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 200 } }'
      >
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        ...
      </div>
    </section>
  );
};

export default Portfolio;
