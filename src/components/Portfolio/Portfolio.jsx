import React, {useState} from 'react';
import Header from '../Base/Header';
import { BsBriefcase } from 'react-icons/bs';
import PortfolioFilter from './PortfolioFilter';
import Gallery from './Gallery';

const Portfolio = () => {
  const [disableScroll, setDisableScroll] = useState(false)
  const disableScrollHandler = () => {
    setDisableScroll(!disableScroll);
  }
  return (
    <section className={disableScroll ?'portfolio disableScroll' : "portfolio"}>
      <Header text="Portfolio." icon={<BsBriefcase />} />
      <PortfolioFilter />
      <Gallery  disableScrollHandler={disableScrollHandler}/>
     

    </section>
  );
};

export default Portfolio;
