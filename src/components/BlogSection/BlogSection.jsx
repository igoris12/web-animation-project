import React from "react";
import Header from "../Base/Header";
import { BiBookAlt } from "react-icons/bi";
import BlogItem from "./BlogItem";

function BlogSection() {
  return (
    <section className="blogSection">
      <Header text="My Blogs." icon={<BiBookAlt />} />
      <div className="content container-fluid">
        <div className="row">
          <BlogItem title={'Best way to designdddddddddddddddddddddddddddddddddddddddddds'}/>
          <BlogItem title={'Things I Need to Get Started dddddddddddddddddd'}/>
          <BlogItem title={'Best way to design'}/>
          <BlogItem title={'Best way to desidgn'}/>
          <BlogItem title={'Best way to design'}/>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;
