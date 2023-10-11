import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
// import { data } from 'isotope-layout'; // in furure will be used to get right video 
import testVideo from '../../video/portfolio.mp4';
import secondTestVideo from '../../video/snakegame.mp4';


const VideoShowcase = ({options, showcaseClose}) => {

    const clickHendeler = (e) => {
        if (e.target.tagName === 'VIDEO' || e.target.tagName === 'path') {
          return;
        }
        showcaseClose();
      } 
  return (
    <section onClick={clickHendeler} className={"showcase  videoShowcase " + options.class}>
            <Swiper
              loop="true"
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              centeredSlides="true"
              speed={0}
              spaceBetween={300}
              navigation={{
                nextEl: '.showcase__navigation_next',
                prevEl: '.showcase__navigation_prev',
              }}
              
            >
              <div className="closeButton" onClick={showcaseClose}><AiOutlineClose/></div>
              <SwiperSlide>
                <div className='imageWrapper'>
                  <video autoPlay controls>
                    <source src={testVideo} type="video/mp4"></source>
                  </video>
                </div>
                <div className="pagination"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                <video autoPlay controls>
                    <source src={secondTestVideo} type="video/mp4"></source>
                  </video>
                </div>
                <div className="pagination"></div>
              </SwiperSlide>
             
         
            </Swiper>
          <div className="btnPrev showcase__navigation_prev"><BsArrowLeftSquareFill/></div>
          <div className="btnNext showcase__navigation_next"><BsArrowRightSquareFill/></div>
    </section>
  )
}

export default VideoShowcase
