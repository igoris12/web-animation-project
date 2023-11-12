import React from "react";
import Blog from "../Blog/Blog";
import Header from "../header/Header";
import ThemeOptions from "../ThemeOptions/ThemeOptions";
import { BrowserRouter as Router } from "react-router-dom";

const Page = () => {
  return (
    <div className="page">
      <ThemeOptions />
      <Header />
      {/* <Router> */}
        <Blog />
      {/* </Router> */}
    </div>
  );
};

export default Page;
