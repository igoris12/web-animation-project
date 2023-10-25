import React, { useContext } from "react";
import OptionsContext from "../../reducers/OptionsContext";

function BlogItem() {
  const { optionsState } = useContext(OptionsContext);
  console.log(optionsState);
  return (
    <div className="blogItem col-12 col-sm-6 col-lg-4">
      <div className="img">
        <img src="%" alt="#" />
      </div>
      <div className="blogItemContent">
        <span
          className="secondaryTitle sectionParagraph"
          style={{ color: optionsState.color }}
        >
          Web desing
        </span>
        <h4 cl className="blogTitle sectionSecondaryHeader">
          Best way to design
        </h4>
        <div className="blogDate">August 15, 2018</div>
      </div>
    </div>
  );
}

export default BlogItem;
