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
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 4000 }}
              slidesPerView={3}
              spaceBetween={40}
              centeredSlides="true"
              speed={1800}
              navigation={{
                nextEl: '.showcase__navigation_next',
                prevEl: '.showcase__navigation_prev',
              }}
            >
              <SwiperSlide>
                slide 1
                {/* <ShowcaseImageWrapper title="Front" img={img1} /> */}
              </SwiperSlide>
              <SwiperSlide>
                slide 2
                {/* <ShowcaseImageWrapper title="Front Two" img={img2} /> */}
              </SwiperSlide>
              <SwiperSlide>
                slide 3
                {/* <ShowcaseImageWrapper title="Side" img={img3} /> */}
              </SwiperSlide>
              <SwiperSlide>
                slide 4
                {/* <ShowcaseImageWrapper title="Back" img={img4} /> */}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="showcase__navigation">
          <div className="showcase__navigation_prev"></div>
          <div className="showcase__navigation_next"></div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;