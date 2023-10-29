import React, { useState } from "react";
import Header from "../Base/Header";
import { BiBookAlt } from "react-icons/bi";
import BlogItem from "./BlogItem";
import BlogSectionData from "./data/BlogSectionData";
import BlogShowcase from "./BlogShowcase";

function BlogSection() {
  const [showcseActive, setShowcseActive] = useState(false);
  return (
    <section className="blogSection">
      <Header text="My Blogs." icon={<BiBookAlt />} />
      <div
        className={
          showcseActive === true
            ? "content container-fluid hidden"
            : "content container-fluid "
        }
      >
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
      <BlogShowcase active={showcseActive} />
    </section>
  );
}

export default BlogSection;
