import React from 'react';
import Header from '../Base/Header';
import { HiOutlineUser } from 'react-icons/hi';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import Testimonials from './Testimonials';
const AboutMe = () => {
  return (
    <section id="aboutMe">
      <Header text={'About Me.'} icon={<HiOutlineUser />} />
      <About />
      <Services />
      <Clients />
      <Testimonials />
    </section>
  );
};

export default AboutMe;
