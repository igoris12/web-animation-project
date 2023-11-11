import React from "react";
import SectionHeader from "../Base/SectionHeader";
import Input from "../Base/Input";
import Textarea from "../Base/Textarea";
import Button from "../Base/Button";

function ContactFrom() {
  return (
    <div className="contactFrom">
      <SectionHeader text={"Let's talk"} />
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
          <Textarea placeholder="How can we help you?" />
        </div>
        <Button text={"Send massage"} width="200px" />
      </form>
    </div>
  );
}

export default ContactFrom;
