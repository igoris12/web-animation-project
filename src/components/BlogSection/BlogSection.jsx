import React from "react";
import Header from "../Base/Header";
import { BiBookAlt } from "react-icons/bi";
import BlogItem from "./BlogItem";

function BlogSection() {
  return (
    <section className="blogSection">
      <Header text="My Blogs." icon={<BiBookAlt />} />
      <BlogItem />
      
    </section>
  );
}

export default BlogSection;
