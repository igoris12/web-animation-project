import React, { useState } from "react";
import Header from "../Base/Header";
import { BiBookAlt } from "react-icons/bi";
import BlogItem from "./BlogItem";
import BlogSectionData from "./data/BlogSectionData";
import BlogShowcase from "./BlogShowcase";
import LoadingPage from "../LoadingPage/LoadingPage";

function BlogSection() {
  const [showcseActive, setShowcseActive] = useState(false);
  const [showcseData, setShowcseData] = useState("");

  const showcseClose = () => {
    setShowcseActive(false);
  };

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
                showcaseOpen={() => {
                  setShowcseActive(true);
                  setShowcseData(data);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={showcseActive === true ? "loader active" : "loader "}>
        <LoadingPage def={false} />
      </div>
      <BlogShowcase
        active={showcseActive}
        close={showcseClose}
        data={showcseData}
      />
    </section>
  );
}

export default BlogSection;
