import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import OptionsContext from '../../reducers/OptionsContext';
const Home = () => {
  const { optionsDispatch, optionsState } = useContext(OptionsContext);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <section className="homeSection">
      <div className="homepageContent">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            backgroundMode: {
              enable: true,
              zIndex: 0,
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: {
                  enable: false,
                  mode: 'trail',
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 0.3,
                  opacity: 1,
                  size: 4,
                  speed: 3,
                },
                grab: { distance: 400, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 1 },
                remove: { particles_nb: 0 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: '#fff' },
              links: {
                color: '#ffffff',
                distance: 500,
                enable: false,
                opacity: 0.4,
                width: 2,
              },
              move: {
                direction: 'top',
                enable: true,
                outMode: 'out',
                random: true,
                size: true,
                speed: 3,
                straight: true,
              },
              number: { density: { enable: true, area: 800 }, value: 100 },
              opacity: {
                random: true,
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 6,
              },
            },
            detectRetina: true,
          }}
        />
        <h1>
          Igoris <span style={{ color: optionsState.color }}>Ivanovas</span>
        </h1>

        <div className="title">
          <div className="staticText">
            I am a
            <span
              className="dynamicText"
              style={{ borderBottomColor: optionsState.color }}
            >
              <Typewriter
                words={['Freelancer', 'Web Developer', 'Frontend Developer']}
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
