import React from "react";
import wallImage from "../../images/BlogSection/blogPageShowcase.jpg";

function BlogShowcase({ active, close, data }) {
  console.log(data);
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
      <div className="content container-fluid">
        <div className="blogHeader">
          <spam className="subtitle">data</spam>
          <h2 className="title">Hi Iam a blog header</h2>
          <i className="date">July 23,2332</i>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          necessitatibus cumque possimus ipsum dolores itaque explicabo
          consequuntur, aliquam assumenda voluptatem!
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          qui, itaque ut beatae blanditiis nemo cupiditate cum praesentium,
          labore, animi dolores! Quibusdam optio, non, rerum ipsam eaque rem
          blanditiis a reprehenderit officiis, incidunt ipsa dolore corporis
          pariatur facilis ut ullam itaque necessitatibus tempore repellendus at
          enim accusamus! Maiores, tenetur.
        </p>
        <div className="postComents">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="form">
          some form 
        </div>
      </div>
    </div>
  );
}

export default BlogShowcase;
