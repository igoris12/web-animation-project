import React, { useContext } from 'react';
import signatureImage from '../../images/AboutMe/signature-white.png';
import OptionsContext from '../../reducers/OptionsContext';
import Button from '../Base/Button';

const About = () => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <article className="about container-fluid">
      <div className="row">
        <div className="description  col-12 col-lg-8">
          <h2 className="sectionSecondaryHeader ">UI/UX Developer</h2>
          <p className="sectionParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <p className="sectionParagraph ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            corporis doloremque facere in porro quaerat? Dolore quibusdam saepe
            magnam sequi aliquid consectetur voluptates animi et, illum
            exercitationem ad? Totam, eaque error commodi fuga quia velit nobis!
            Blanditiis, laudantium rem. Architecto modi ut, non atque neque
            tempora ipsum numquam commodi ex?
          </p>
          <div className="image">
            <img src={signatureImage} alt="signature" />
          </div>
        </div>

        <aside className="info col-12 col-lg-4">
          <h2 className="sectionSecondaryHeader ">Personal information</h2>
          <ul className="infoList ">
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
                Age
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
          <Button text={'Download resume'} color={optionsState.color} />
        </aside>
      </div>
    </article>
  );
};

export default About;
