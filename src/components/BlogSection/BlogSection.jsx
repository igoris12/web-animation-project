import React from "react";
import Header from "../Base/Header";
import { BiBookAlt } from "react-icons/bi";
import BlogItem from "./BlogItem";
import BlogSectionData from "./data/BlogSectionData";

function BlogSection() {
  return (
    <section className="blogSection">
      <Header text="My Blogs." icon={<BiBookAlt />} />
      <div className="content container-fluid">
        <div className="row">
          {BlogSectionData.map((data) => {
            return (
              <BlogItem 
                key={data.id}
                title={data.title}
                subtitle={data.subtitle}
                img={data.img}
                date={data.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
