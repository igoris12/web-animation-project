import React, { useEffect, useState } from 'react';
import SectionHeader from '../Base/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import client1 from '../../images/AboutMe/Clients/client-01.png';
import client2 from '../../images/AboutMe/Clients/client-02.png';
import client3 from '../../images/AboutMe/Clients/client-03.png';
import client4 from '../../images/AboutMe/Clients/client-04.png';
import client5 from '../../images/AboutMe/Clients/client-05.png';
import client6 from '../../images/AboutMe/Clients/client-06.png';
import client7 from '../../images/AboutMe/Clients/client-07.png';
import client8 from '../../images/AboutMe/Clients/client-08.png';
import client9 from '../../images/AboutMe/Clients/client-09.png';

const Clients = () => {
  const [perView, setPerView] = useState(2);
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (e.target.innerWidth < 500) {
        setPerView(2);
      }
      if (e.target.innerWidth > 500) {
        setPerView(3);
      }
      if (e.target.innerWidth > 700) {
        setPerView(4);
      }
      if (e.target.innerWidth > 1000) {
        setPerView(6);
      }
    });

    window.innerWidth < 500 && setPerView(2);
    window.innerWidth > 500 && setPerView(3);
    window.innerWidth > 700 && setPerView(4);
    window.innerWidth > 1000 && setPerView(6);
  }, []);

  return (
    <section className="Clients container-fluid">
      <div className="row">
        <SectionHeader text={'Clients'} />
      </div>
      <Swiper
        modules={[Autoplay]}
        className="row"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={perView}
        loop={true}
        res={'ture'}
      >
        <SwiperSlide>
          <a href="#">
            <img src={client1} alt="logo-1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client2} alt="log-2" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client3} alt="logo-3" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client4} alt="logo-4" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client5} alt="logo-5" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client6} alt="logo-6" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client7} alt="logo-7" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client8} alt="logo-8" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={client9} alt="logo-9" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Clients;
