import React from 'react';
import TimeStampElement from './TimeStampElement';
import SectionHeader from '../Base/SectionHeader';

const experienceAndEducation = () => {
  return (
    <>
      <div className="experienceEducation container-fluid">
        <div className="row">
          <div className="experience col-12 col-lg-5">
            <SectionHeader text={'experience'} />
            <ul className="col-12">
              <TimeStampElement />
              <TimeStampElement />
            </ul>
          </div>

          <div className="education col-12 col-lg-5">
            <SectionHeader text={'education'} />
            <ul>
              <TimeStampElement
                from="2021"
                to="2022"
                title="self Learning"
                location="around the world"
                text="After full-stack courses I decide to learn more advanced technology in front-end like React.js."
              />
              <TimeStampElement
                title="Full-Stack Developer"
                location={'Baltic institute of technology, Vilnius, Lithuania'}
                text="Gain a deep understanding of how to build, deploy, secure and scale programs and build expertise across the user interface, business logic and database stacks."
                from="2020"
                to="2021"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default experienceAndEducation;
