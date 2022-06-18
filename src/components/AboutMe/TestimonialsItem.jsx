import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsItem = () => {
  return (
    <div className="TestimonialsItem">
      <div className="testimonilTextBox ">
        <span>
          <FaQuoteLeft />
        </span>
        <p className="sectionParagraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          facere nostrum saepe quasi possimus molestias illum iure aperiam
          ducimus provident.
        </p>
      </div>
      <div className="clientInfo">
        <img src="#" alt="Client avatar" />
        <h4>Randopme name</h4>
        <p>randome duty</p>
      </div>
    </div>
  );
};

export default TestimonialsItem;
