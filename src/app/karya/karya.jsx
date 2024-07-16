import Image from 'next/image'
import React from 'react'
import { karyaNaskah } from '../Components/data'

const Naskah = () => {
  return (
    <div className="w-screen mx-auto mt-10 p-5">
      <h1 className="font-bold text-center text-3xl lg:text-6xl">KARYA</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-5 ">
        {karyaNaskah.map(({ Img, title, write, desc }, index) => {
          return (
            <div key={index} className="border border-white p-5 m-2">
              <Image src={Img} alt="."></Image>
              <h1 className="mt-3 mb-2 font-bold text-3xl lg:text-4xl">
                {title}
              </h1>
              <h3 className="font-bold italic mb-3">Karya {write}</h3>
              <p className='text-justify'>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Naskah