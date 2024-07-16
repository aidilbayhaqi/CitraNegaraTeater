'use client'
import React from 'react'
import '@/app/globals.css'
import { activity, prestasi } from '../Components/data'
import Image from 'next/image'
import { useState } from 'react'

const Aktivitas = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  return (
    <section className="w-full mt-32 mx-auto items-center ">
      <div className="bg-gradient-about p-10 text-center">
        <h1 className="font-bold text-3xl lg:text-6xl">AKTIVITAS</h1>
        <p className="mt-3 tracking-wide font-bold text-3xl">
          LALU, CITTER ITU KEGIATANNYA ADA APA AJA??
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10">
          {activity.map(({ Img, title, desc }, index) => {
            return (
              <div key={index} className="  ">
                <Image
                  src={Img}
                  alt=""
                  className="p-3 hover:scale-110 hover:opacity-80 transition-all"
                />
                <div className="image-overlay">
                  <h3 className="font-bold text-2xl">{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Aktivitas