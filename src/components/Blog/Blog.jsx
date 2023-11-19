import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import BlogSection from "../BlogSection/BlogSection";
import Contact from "../Contact/Contact";


const Blog = () => {
  return (
    <section className="blog-page ">
      <Routes>
        <Route path="/web-animation-project/" element={<Home />} />
        <Route path="/web-animation-project/aboutMe" element={<AboutMe />} />
        <Route path="/web-animation-project/resume" element={<Resume />} />
        <Route path="/web-animation-project/portfolio" element={<Portfolio />} />
        <Route path="/web-animation-project/blogSection" element={<BlogSection />} />
        <Route path="/web-animation-project/contact" element={<Contact />} />
      </Routes>
    </section>
  );
};

export default Blog;
