import React from "react";
import Button from "../Base/Button";

function BlogShowcaseForm() {
  return (
    <div className="blogShowcaseForm">
      <h4 className="sectionSecondaryHeader">Leave a reply</h4>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button text='Post comment' />
      </form>
    </div>
  );
}

export default BlogShowcaseForm;
