import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import portfolio from '../../images/Portfolio/Projects/portfolio.png';
import snakeGame from '../../images/Portfolio/Projects/snakeGame.png';
import vintedCopy from '../../images/Portfolio/Projects/vintedCopy.png';
import slider3d from '../../images/Portfolio/Projects/slider3d.png';
import simpleForm from '../../images/Portfolio/Projects/simpleForm.png';
import webProject from '../../images/Portfolio/Projects/webProject.png';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Showcase = ({options, showcaseClose}) => {
 
  return (
    <section className={"showcase " + options.class}>
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
                <div className='imageWrapper'>
                  <img src={portfolio} alt="Project 1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <img src={snakeGame} alt="Project 2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <img src={vintedCopy} alt="Project 3" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <img src={slider3d} alt="Project 4" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <img src={simpleForm} alt="Project 5" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <img src={webProject} alt="Project 6" />
                </div>
              </SwiperSlide>
            </Swiper>
          <div className="closeButton" onClick={showcaseClose}><AiOutlineClose/></div>
          <div className="showcase__navigation_prev"><BsArrowLeftSquareFill/></div>
          <div className="showcase__navigation_next"><BsArrowRightSquareFill/></div>
    </section>
  );
};

export default Showcase;