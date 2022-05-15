import React, { useState, useEffect } from 'react';

const Home = () => {
  const [state, setState] = useState(false);

  // setInterval(() => {
  //   setState(!state);
  //   // console.log(state);
  // }, 1000);

  return (
    <section className="homeSection">
      <div className="homepageContent">
        <h1>
          Igoris <span>Ivanovas</span>
        </h1>
        <div className="title">
          I am a{' '}
          <span className="animatedText">
            <span className={state ? 'visible' : 'hidden'}>Web developer</span>
            <span className="hidden">Freelancer</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
