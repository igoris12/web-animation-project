import React from 'react';

const Home = () => {
  return (
    <section className="homeSection">
      <div className="homepageContent">
        <h1>
          Igoris <span>Ivanovas</span>
        </h1>
        <div className="title">
          I am a{' '}
          <span className="animatedText">
            <b className="visible">Web developer</b>
            <b className="hidden">Freelancer</b>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
