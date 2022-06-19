import React, { useContext } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import OptionsContext from '../../reducers/OptionsContext';

const TestimonialsItem = ({ img }) => {
  const { optionsState } = useContext(OptionsContext);

  return (
    <div className="TestimonialsItem">
      <div className="testimonilTextBox ">
        <span style={{ color: optionsState.color }}>
          <FaQuoteLeft />
        </span>
        <p className="sectionParagraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          facere nostrum saepe quasi possimus molestias illum iure aperiam
          ducimus provident.
        </p>
      </div>
      <div className="clientInfo">
        <img
          src="https://watson-vcard.netlify.app/img/testimonials/author-3.jpg"
          alt="Client avatar"
        />
        <span>
          <h4 className="sectionSecondaryHeader">Randopme name</h4>
          <p className="sectionParagraph">randome duty</p>
        </span>
      </div>
    </div>
  );
};

export default TestimonialsItem;
