'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { prestasi } from '../Components/data';
import Image from 'next/image';

const Prestasi = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="w-full mt-20  mx-auto items-center ">
        <div className="bg-[#121212] p-10 rounded-3xl text-center">
          <h1 className="font-bold text-3xl lg:text-6xl">PRESTASI</h1>
          <p className="mt-3 tracking-wide font-bold text-3xl">
            CITTER PUNYA PRESTASI APA AJA SIH??
          </p>
          <div className="items-center mx-auto mt-10 ">
        <Slider {...settings}>
          {prestasi.map(({Img,title,desc}, index) => (
            <div key={index}>
              <Image
                src={Img}
                alt={`Image ${index}`}
                className="w-full lg: mx-auto rounded-3xl hover:scale-105 transition-all hover:opacity-50"
              />
              <h1 className='mt-4 font-bold text-3xl lg:text-5xl md:text-3xl'>{title}</h1>
              <p className='mt-3 tracking-wide'>{desc}</p>
            </div>
          ))}
        </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prestasi