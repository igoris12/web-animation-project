import React, { useContext } from 'react';
import OptionsContext from '../../reducers/OptionsContext';
import { HiOutlineUser } from 'react-icons/hi';
import signatureImage from '../../images/AboutMe/signature-white.png';

const AboutMe = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <section className="aboutMe container-fluid">
      <div className="sectionHeader row">
        <h1 className="col-12 " style={{ color: optionsState.color }}>
          About me.
          <span className="col-1">
            <HiOutlineUser />
          </span>
        </h1>
      </div>
      <article className="about row">
        <div className="description col-12 row">
          <h2 className="col-12">UI/UX Developer</h2>
          <p className="col-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <p className="col-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <div className="image col-9">
            <img src={signatureImage} alt="signature" />
          </div>
        </div>
        <aside className="info row col-12">
          <h2 className="col-12">Personal information</h2>
          <ul className="infoList col-12">
            <li className="item">
              <span
                className="title"
                style={{ borderColor: optionsState.color }}
              >
                Name
              </span>
              <span className="value">Igoris Ivanovas</span>
            </li>
            <li className="item">
              <span
                className="title"
                style={{ borderColor: optionsState.color }}
              >
                Age26
              </span>
              <span className="value">22 Years</span>
            </li>
            <li className="item">
              <span
                className="title"
                style={{ borderColor: optionsState.color }}
              >
                Residence
              </span>
              <span className="value">Lithuania</span>
            </li>
            <li className="item">
              <span
                className="title"
                style={{ borderColor: optionsState.color }}
              >
                Email
              </span>
              <span className="value">igoris.x@inbox.lt</span>
            </li>
            <li className="item">
              <span
                className="title"
                style={{ borderColor: optionsState.color }}
              >
                Freelance
              </span>
              <span className="value">Available</span>
            </li>
          </ul>
          <button className="col-8">Download resume</button>
        </aside>
      </article>
    </section>
  );
};

export default AboutMe;
