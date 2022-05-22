import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="homeSection">
      <div className="homepageContent">
        <h1>
          Igoris <span>Ivanovas</span>
        </h1>

        <div className="title">
          <div className="staticText">
            I am a
            <span className="dynamicText">
              <Typewriter
                words={[' Freelancer', ' Web Developer', ' Frontend Developer']}
                loop
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
