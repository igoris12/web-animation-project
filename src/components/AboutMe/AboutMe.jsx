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
      <div className="about row">
        <div>
          <h2>UI/UX Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <img src="#" alt="signature" />
        </div>
        <aside>
          <h2>Personal information</h2>
          <ul className="infoList">
            <li className="item">
              <span className="title">Name</span>
              <p className="value">Igoris Ivanovas</p>
            </li>
            <li className="item">
              <span className="title">Age26</span>
              <p className="value">22 Years</p>
            </li>
            <li className="item">
              <span className="title">Residence</span>
              <p className="value">Lithuania</p>
            </li>
            <li className="item">
              <span className="title">Email</span>
              <p className="value">igoris.x@inbox.lt</p>
            </li>
            <li className="item">
              <span className="title">Freelance</span>
              <p className="value">Available</p>
            </li>
          </ul>
          <button>Download resume</button>
        </aside>
      </div>
    </section>
  );
};

export default AboutMe;
