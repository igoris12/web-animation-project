import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { HiOutlineUser } from 'react-icons/hi';

const AboutMe = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <section className="aboutMe container-fluid">
      <div className="header row  col-12">
        <h1 style={{ color: optionsState.color }}>
          About me.
          <span className="reverse">
            <HiOutlineUser />
          </span>
        </h1>
      </div>
      <div>next</div>
    </section>
  );
};

export default AboutMe;
