import React from "react";

function BlogShowcase({active}) {
  return (
    <div className={active === true ? 'blogShowcase active': 'blogShowcase hidden'}>
      <div className="content">
        <span className="close">X</span>
        <div>Top</div>
        <div>Bottom </div>
      </div>
    </div>
  );
}

export default BlogShowcase;
