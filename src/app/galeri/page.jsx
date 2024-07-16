'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { slider } from '../Components/data';
import Galeri from './galeri';
import "react";
import GaleriAct from './galeriAct';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const galeri = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 30000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slider.map(({ Img, title, desc }, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="mx-auto w-full items-center text-center py-10 lg:py-0"
            >
              <Image
                src={Img}
                alt={`Image ${index}`}
                className="w-full transition-all hover:opacity-50"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Galeri />
      <GaleriAct />
    </>
  );
}

export default galeri