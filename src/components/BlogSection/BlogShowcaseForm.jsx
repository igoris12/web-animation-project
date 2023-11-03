import React from "react";
import Button from "../Base/Button";
import Input from "../Base/Input";
import Textarea from "../Base/Textarea";

function BlogShowcaseForm() {
  return (
    <div className="blogShowcaseForm">
      <h4 className="sectionSecondaryHeader">Leave a reply</h4>
      <form>
        <div className="info">
        <Input name="name" placeholder="Name" width="45%" />
        <Input name="email" placeholder="Email" width="45%" />
        </div>
        <Textarea />
        <Button text="Post comment" width="30%" />
      </form>
    </div>
  );
}

export default BlogShowcaseForm;
