import React, { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';

const Blog = () => {
  return (
    <section className="blog-page ">
      {/* <Home /> */}
      {/* <AboutMe /> */}
      {/* <Resume /> */}
      <Portfolio />
    </section>
  );
};

export default Blog;
