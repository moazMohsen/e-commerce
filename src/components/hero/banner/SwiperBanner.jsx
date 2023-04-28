import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//
import { bigBaner1, bigBaner2, bigBaner3 } from "../../../images/index_img";
import "./swiperBanner.scss";
const SwiperBanner = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        loop={true}
        className="bigSwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <div className="swiper-slide" data-swiper-parallax="-300">
            <img src={bigBaner2} alt="" />
          </div>
          <div className="swiperContent">
            <div className="subtitle" data-swiper-parallax="-200">
              smart watch
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>today's offer</p>
              <p>
                apple watch <span>series7</span>
              </p>
              <button> shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" data-swiper-parallax="-300">
            <img src={bigBaner1} alt="" />
          </div>
          <div className="swiperContent">
            <div className="subtitle" data-swiper-parallax="-200">
              best headset
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>today's offer</p>
              <p>
                gaming headset <span>gp9</span>
              </p>
              <button> shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" data-swiper-parallax="-300">
            <img src={bigBaner3} alt="" />
          </div>
          <div className="swiperContent">
            <div className="subtitle" data-swiper-parallax="-200">
              smart phone
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>today's offer</p>
              <p>
                iphone <span>pro 12</span>
              </p>
              <button> shop now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBanner;
