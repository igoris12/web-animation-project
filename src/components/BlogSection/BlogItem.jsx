import React, { useContext } from "react";
import OptionsContext from "../../reducers/OptionsContext";
import blogSectionImages from './data/images';

function BlogItem({title , subtitle, img, date, showcaseOpen}) {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="blogItem col-12 col-sm-6 col-lg-4" onClick={showcaseOpen}>
      <div className="img">
        <img src={blogSectionImages[img]} alt="#" />
      </div>
      <div className="blogItemContent">
        <span
          className="secondaryTitle sectionParagraph"
          style={{ color: optionsState.color }}
        >
          {subtitle}
        </span>
        <h4  className="blogTitle sectionSecondaryHeader">
           {title}
        </h4>
        <div className="blogDate">{date}</div>
      </div>
    </div>
  );
}

export default BlogItem;
