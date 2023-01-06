import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
// import { data } from 'isotope-layout'; // in furure will be used to get right video 

const VideoShowcase = ({options, showcaseClose}) => {

    const clickHendeler = (e) => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'path') {
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
                <iframe  src="https://www.youtube.com/embed/k_okcNVZqqI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="pagination"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='imageWrapper'>
                <iframe  src="https://www.youtube.com/embed/oOkGmK3_Hdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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