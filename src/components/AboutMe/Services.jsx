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
        <ServicesItem col="col-12" icon={<MdComputer />} />
        <ServicesItem col="col-12" icon={<ImEye />} />
        <ServicesItem col="col-12" icon={<MdPhonelink />} />
        <ServicesItem col="col-12" icon={<VscDebug />} />
      </ul>
    </section>
  );
};

export default Services;
