import React, { useState, useEffect } from 'react';

const Home = () => {
  // const [state, setState] = useState(false);

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
          <div className="staticText"> I am a</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
