import React from 'react';
import SectionHeader from '../Base/SectionHeader';
import TestimonialsItem from './TestimonialsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const Testimonials = () => {
  return (
    <section className="Testimonials container-fluid">
      <div className="row">
        <SectionHeader text="Testimonials" />
      </div>
      <Swiper spaceBetween={50} slidesPerView={2} loop={true}>
        <SwiperSlide>
          <TestimonialsItem />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
