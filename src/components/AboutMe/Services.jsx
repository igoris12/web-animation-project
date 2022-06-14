import React from 'react';
import SectionHeader from '../Base/SectionHeader';
import ServicesItem from './ServicesItem';
import { MdComputer, MdPhonelink } from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import { VscDebug } from 'react-icons/vsc';

const Services = () => {
  return (
    <section className="services container-fluid">
      <div className="row">
        <SectionHeader text={'Services'} />
      </div>
      <ul className="row">
        <ServicesItem
          col="col-12"
          icon={<MdComputer />}
          title="Web Development"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto itaque accusamus ullam dolorem quibusdam, necessitatibus perferendis doloribus quo placeat incidunt, porro amet nisi deleniti nemo assumenda repudiandae blanditiis dolore! Aut!"
        />
        <ServicesItem
          col="col-12"
          icon={<ImEye />}
          title="Web Design"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto itaque accusamus ullam dolorem quibusdam, necessitatibus perferendis doloribus quo placeat incidunt, porro amet nisi deleniti nemo assumenda repudiandae blanditiis dolore! Aut!"
        />
        <ServicesItem
          col="col-12"
          icon={<MdPhonelink />}
          title="Responsive Design"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto itaque accusamus ullam dolorem quibusdam, necessitatibus perferendis doloribus quo placeat incidunt, porro amet nisi deleniti nemo assumenda repudiandae blanditiis dolore! Aut!"
        />
        <ServicesItem
          col="col-12"
          icon={<VscDebug />}
          title="Debugging"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto itaque accusamus ullam dolorem quibusdam, necessitatibus perferendis doloribus quo placeat incidunt, porro amet nisi deleniti nemo assumenda repudiandae blanditiis dolore! Aut!"
        />
      </ul>
    </section>
  );
};

export default Services;
