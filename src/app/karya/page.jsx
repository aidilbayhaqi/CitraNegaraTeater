"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { naskahSlider, slider } from "../Components/data";
import "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Naskah from "./karya";


const Karya = () => {
  
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
        {naskahSlider.map(({ Img }, index) => (
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
      <Naskah/>
    </>
  );
};

export default Karya;
