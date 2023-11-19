import React from "react";
import SectionHeader from "../Base/SectionHeader";
import ServicesItem from "./ServicesItem";
import { MdComputer, MdPhonelink } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { VscDebug } from "react-icons/vsc";

const Services = () => {
  return (
    <section className="services container-fluid">
      <div className="row">
        <SectionHeader text={"Services"} />
      </div>
      <ul className="row">
        <ServicesItem
          col="col-12 col-sm-6 col-lg-3"
          icon={<MdComputer />}
          title="Web Development"
          text="I am Igoris, a web developer based in Lithuania. I develop websites using React.js and CSS, I mostly love working on the front-end using SASS and React."
        />
        <ServicesItem
          col="col-12 col-sm-6 col-lg-3"
          icon={<ImEye />}
          title="Web Design"
          text="I am working with many different styles and keeping with modern design trends.
My main goal in my work it contributes to the success of my clients."
        />
        <ServicesItem
          col="col-12 col-sm-6 col-lg-3"
          icon={<MdPhonelink />}
          title="Responsive Design"
          text="Responsive Design is one of the main must have in my skill set for maximum clients profit!"
        />
        <ServicesItem
          col="col-12 col-sm-6 col-lg-3"
          icon={<VscDebug />}
          title="Debugging"
          text="I' am experienced in debugging I gain great skill base working on many projects. "
        />
      </ul>
    </section>
  );
};

export default Services;
