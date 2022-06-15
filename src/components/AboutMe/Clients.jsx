import React from 'react';
import SectionHeader from '../Base/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Clients = () => {
  return (
    <section className="Clients container-fluid">
      <div className="row">
        <SectionHeader text={'Clients'} />
      </div>
      <Swiper spaceBetween={50} slidesPerView={3} loop={true}>
        <SwiperSlide>
          <a href="#">
            <img src="#" alt="logo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="#" alt="logo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="#" alt="logo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="#" alt="logo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="#" alt="logo" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Clients;
