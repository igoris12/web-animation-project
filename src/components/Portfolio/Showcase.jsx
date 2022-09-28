import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// import ShowcaseImageWrapper from './ShowcaseImageWrapper';

const Showcase = () => {

  return (
    <section className="showcase">
      <div className="showcase__content-wrapper">
        <div className="showcase__content">
          <div className="showcase__carousel">
            <Swiper
              loop="true"
              modules={[Navigation]}
             
              slidesPerView={1}
              centeredSlides="true"
              speed={0}
              navigation={{
                nextEl: '.showcase__navigation_next',
                prevEl: '.showcase__navigation_prev',
              }}
            >
              <SwiperSlide>
                <img src="" alt="Project 1" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="" alt="Project 2" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="" alt="Project 3" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="" alt="Project 4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="showcase__navigation">
          <div className="showcase__navigation_prev">a</div>
          <div className="showcase__navigation_next">b</div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;