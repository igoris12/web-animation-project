import React from 'react';
import SectionHeader from '../Base/SectionHeader';
import TestimonialsItem from './TestimonialsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import image1 from '../../images/AboutMe/Testimonials/author-1.jpg';
import image2 from '../../images/AboutMe/Testimonials/author-2.jpg';
import image3 from '../../images/AboutMe/Testimonials/author-3.jpg';

const massagesInfo = [
  {
    id: 1,
    personName: 'Kate Fox',
    personRole: 'Digital Marketing Executive',
    img: image1,
  },
  {
    id: 2,
    personName: 'Emma Jones',
    personRole: 'Creative Director',
    img: image2,
  },
  {
    id: 3,
    personName: 'Jack Smith',
    personRole: 'Marketing Director',
    img: image3,
  },
];
const Testimonials = () => {
  return (
    <section className="Testimonials container-fluid">
      <div className="row">
        <SectionHeader text="Testimonials" />
      </div>
      <Swiper spaceBetween={50} slidesPerView={2} loop={true}>
        {massagesInfo.map((info) => (
          <SwiperSlide key={info.id}>
            <TestimonialsItem info={info} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
