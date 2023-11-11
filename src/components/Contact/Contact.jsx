import React from "react";
import Header from "../Base/Header";
import { HiOutlineMail } from "react-icons/hi";
import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <section className="contact">
      <Header text={"Contact me."} icon={<HiOutlineMail />} />
      <ContactFrom/>
      <ContactInfo/>
    </section>
  );
}

export default Contact;
