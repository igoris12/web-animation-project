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
              <TimeStampElement />
              <TimeStampElement />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default experienceAndEducation;
