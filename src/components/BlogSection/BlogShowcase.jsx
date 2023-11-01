import React, { useContext } from "react";
import wallImage from "../../images/BlogSection/blogPageShowcase.jpg";
import OptionsContext from "../../reducers/OptionsContext";
import BlogShowcaseCommentItem from "./BlogShowcaseCommentItem";
import BlogShowcaseComments from "./BlogShowcaseComments";

function BlogShowcase({ active, close, data }) {
  console.log(data);
  const { optionsState } = useContext(OptionsContext);
  return (
    <div
      className={
        active === true ? "blogShowcase  active" : "blogShowcase hidden"
      }
    >
      <span className="close" onClick={close}>
        X
      </span>
      <div className="imageContainer">
        <img src={wallImage} alt="blog wall paper" />
      </div>
      <div className="content">
        <div className="blogHeader">
          <spam
            className="subtitle sectionParagraph"
            style={{ color: optionsState.color }}
          >
            Fashion
          </spam>
          <h2 className="title sectionSecondaryHeader">Welcome to my blog</h2>
          <i className="date sectionParagraph">January 20, 2018</i>
        </div>
        <p className="sectionParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit enim qui, itaque ut beatae
          blanditiis nemo cupiditate cum praesentium, labore, animi dolores!
          Quibusdam optio, non, rerum ipsam eaque rem blanditiis a reprehenderit
          officiis, incidunt ipsa dolore corporis pariatur facilis ut ullam
          itaque necessitatibus tempore repellendus at enim accusamus! Maiores,
          tenetur.
        </p>
        <p className="sectionParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit enim qui, itaque ut beatae
          blanditiis nemo cupiditate cum praesentium, labore, animi dolores!
          Quibusdam optio, non, rerum ipsam eaque rem blanditiis a reprehenderit
          officiis, incidunt ipsa dolore corporis pariatur facilis ut ullam
          itaque necessitatibus tempore repellendus at enim accusamus! Maiores,
          tenetur.
        </p>
        <blockquote
          className="sectionParagraph"
        > 
        <span style={{ backgroundColor: optionsState.color }}></span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          necessitatibus cumque possimus ipsum dolores itaque explicabo
          consequuntur, aliquam assumenda voluptatem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem necessitatibus cumque possimus
          ipsum dolores itaque explicabo consequuntur, aliquam assumenda
          voluptatem!
        </blockquote>
        <p className="sectionParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit enim qui, itaque ut beatae
          blanditiis nemo cupiditate cum praesentium, labore, animi dolores!
          Quibusdam optio, non, rerum ipsam eaque rem blanditiis a reprehenderit
          officiis, incidunt ipsa dolore corporis pariatur facilis ut ullam
          itaque necessitatibus tempore repellendus at enim accusamus! Maiores,
          tenetur.
        </p>
      </div>
      <BlogShowcaseComments/>
      <div className="form">some form</div>
    </div>
  );
}

export default BlogShowcase;
