import React, { useContext } from "react";
import Button from "../Base/Button";
import Input from "../Base/Input";
import Textarea from "../Base/Textarea";
import OptionsContext from "../../reducers/OptionsContext";

function BlogShowcaseForm() {
  const { optionsState } = useContext(OptionsContext);
  return (
    <div className="blogShowcaseForm">
      <h4 className="sectionSecondaryHeader">Leave a reply</h4>
      <form>
        <div className="info">
          <div className="input">
            <Input name="name" placeholder="Name" />
          </div>
          <div className="input">
            <Input name="email" placeholder="Email" />
          </div>
        </div>
        <div className="commentarea">
          <Textarea placeholder="Your Comment" />
        </div>
        <div className="postButton">
          <Button color={optionsState.color} text="Post comment" />
        </div>
      </form>
    </div>
  );
}

export default BlogShowcaseForm;
