import React from 'react';
import TimeStampElement from './TimeStampElement';
import SectionHeader from '../Base/SectionHeader';

const experienceAndEducation = () => {
  return (
    <>
      <div className="experienceEducation container-fluid">
        <div className="experience row">
          <SectionHeader text={'experience'} />
          <ul className="col-12">
            <TimeStampElement />
            <TimeStampElement />
          </ul>
        </div>
        <div className="education row">
          <SectionHeader text={'education'} />
          <ul className="col-12 ">
            <TimeStampElement />
            <TimeStampElement />
          </ul>
        </div>
      </div>
    </>
  );
};

export default experienceAndEducation;
