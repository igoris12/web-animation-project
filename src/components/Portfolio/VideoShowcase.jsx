import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const VideoShowcase = ({ options, showcaseClose, data }) => {

  const clickHendeler = (e) => {
    if (e.target.tagName === "IFRAME") {
    }
    if (e.target.tagName === "IFRAME" || e.target.tagName === "path") {
      return;
    }
    showcaseClose();
  };

  return (
    <section
      onClick={clickHendeler}
      className={"showcase  videoShowcase " + options.class}
    >
      {/* <Swiper
        loop="true"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides="true"
        speed={0}
        spaceBetween={300}
        navigation={{
          nextEl: ".showcase__navigation_next",
          prevEl: ".showcase__navigation_prev",
        }}
      >
        <div className="closeButton" onClick={showcaseClose}>
          <AiOutlineClose />
        </div>
        {data.map((item) =>
          item.type === "video" ? (
            <SwiperSlide key={item.id}>
              <div className="imageWrapper">
                <iframe
                  src={item.video}
                  title="YouTube video player"
                  allowFullScreen
                  frameBorder="0"
                  width="560"
                  height="315"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="pagination"></div>
            </SwiperSlide>
          ) : null
        )}
     
      </Swiper> */}
      <div className="btnPrev showcase__navigation_prev">
        <BsArrowLeftSquareFill />
      </div>
      <div className="btnNext showcase__navigation_next">
        <BsArrowRightSquareFill />
      </div>
    </section>
  );
};

export default VideoShowcase;
