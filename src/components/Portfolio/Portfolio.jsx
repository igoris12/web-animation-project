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
      <div className="portfolioFilter container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="portfolioFilterList">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".Odd">Odd</li>
              <li data-filter=".Even">Even</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="grid container-fluid">
              <div data-category="odd" className="element-item Odd">
                <h3>1</h3>
              </div>
              <div data-category="even" className="element-item Even">
                <h3>2</h3>
              </div>
              <div data-category="odd" className="element-item Odd">
                <h3>3</h3>
              </div>
              <div data-category="even" className="element-item Even">
                <h3>4</h3>
              </div>
              <div data-category="odd" className="element-item Odd">
                <h3>5</h3>
              </div>
              <div data-category="even" className="element-item Even">
                <h3>6</h3>
              </div>
              <div data-category="odd" className="element-item Odd">
                <h3>7</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
