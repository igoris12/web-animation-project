import React, { useContext } from "react";
import OptionsContext from "../../reducers/OptionsContext";
import img from '../../images/BlogSection/design.png'

function BlogItem({title}) {
  const { optionsState } = useContext(OptionsContext);
  console.log(optionsState);
  return (
    <div className="blogItem col-12 col-sm-6 col-lg-4">
      <div className="img">
        <img src={img} alt="#" />
      </div>
      <div className="blogItemContent">
        <span
          className="secondaryTitle sectionParagraph"
          style={{ color: optionsState.color }}
        >
          Web desing
        </span>
        <h4 cl className="blogTitle sectionSecondaryHeader">
           {title}
        </h4>
        <div className="blogDate">August 15, 2018</div>
      </div>
    </div>
  );
}

export default BlogItem;
