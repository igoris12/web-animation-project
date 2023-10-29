import React from "react";

function BlogShowcase({active, close}) {
  return (
    <div className={active === true ? 'blogShowcase active': 'blogShowcase hidden'}>
      <div className="content">
        <span className="close" onClick={close}>X</span>
        <div>Top</div>
        <div>Bottom </div>
      </div>
    </div>
  );
}

export default BlogShowcase;
