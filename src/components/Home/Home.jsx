import React, { useContext, useMemo } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import OptionsContext from "../../reducers/OptionsContext";
import DynamicText from "./DynamicText";
const Home = () => {
  const { optionsState } = useContext(OptionsContext);
  // const particlesInit = useMemo(
  //   () => async (main) => {
  //     await loadFull(main);
  //   },
  //   []
  // );
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  const particlesLoaded = (container) => {};
  console.log('a');
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
              detectsOn: "canvas",
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: {
                  enable: false,
                  mode: "trail",
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
              color: { value: "#fff" },
              links: {
                color: "#ffffff",
                distance: 500,
                enable: false,
                opacity: 0.4,
                width: 2,
              },
              move: {
                direction: "top",
                enable: true,
                outMode: "out",
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
                type: "circle",
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
              <span><DynamicText/></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
