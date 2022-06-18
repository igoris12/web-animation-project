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
