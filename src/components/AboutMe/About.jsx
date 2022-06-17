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
            I am a webdeveloper having more than 1+ years of experience in
            building web applications that match client needs. The client
            usually explains to me what they want to accomplish and I will
            explain the solution and develop it. I am pretty much confident with
            my talent and knowledge which I achieved in the past working on many
            projects based on different industries.
          </p>
          <p className="sectionParagraph ">
            I'm very proficient in working with the following technologies.
            Front end technologies: React.js/Redux, ES6, Javascript, HTML5,
            CSS3. I care about UI/UX and can build outstanding interfaces
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
              <span className="value">
                {new Date().getFullYear() - 2000} Years
              </span>
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
