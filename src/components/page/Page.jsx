import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../header/Header';
import ThemeOptions from '../ThemeOptions/ThemeOptions';

const Page = () => {
  return (
    <div className="page">
      <ThemeOptions />
      <Header />
      <Blog />
    </div>
  );
};

export default Page;
