import React from "react";
import Button from "../Base/Button";
import Input from "../Base/Input";

function BlogShowcaseForm() {
  return (
    <div className="blogShowcaseForm">
      <h4 className="sectionSecondaryHeader">Leave a reply</h4>
      <form>
       <Input/>
       <Input/>
       <Input/>

        <Button text='Post comment' />
      </form>
    </div>
  );
}

export default BlogShowcaseForm;
