import React, { useContext } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import OptionsContext from '../../reducers/OptionsContext';

const TestimonialsItem = ({ info }) => {
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
        <img src={info.img} alt="Client avatar" />
        <span>
          <h4 className="sectionSecondaryHeader">{info.personName}</h4>
          <p className="sectionParagraph">{info.personRole}</p>
        </span>
      </div>
    </div>
  );
};

export default TestimonialsItem;
