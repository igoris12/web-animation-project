import React from "react";
import Header from "../Base/Header";
import { BiBookAlt } from 'react-icons/bi';


function BlogSection() {
  return <section className="blogSection"><Header text='My Blogs.' icon={<BiBookAlt/>}/></section>;
}

export default BlogSection;
