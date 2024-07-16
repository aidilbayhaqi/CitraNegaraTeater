import React from 'react'
import { galery } from '../Components/data';
import Image from 'next/image';

const Galeri = () => {
  return (
    <section className="w-full mt-8 mx-auto items-center">
      <div className="p-10 text-center">
        <h1 className="font-bold text-3xl lg:text-6xl">GALERI CITTER</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10">
            {galery.map(({Img,title,desc}, index)=>{
                return (
                  <div className="image-container transition-all rounded-lg hover:scale-110 hover:opacity-50">
                    <Image
                      src={Img}
                      alt="Image"
                      className="image p-3 rounded-xl"
                    />
                    <div className="image-overlay hover:opacity-100">
                      <h3 className='font-bold text-xl lg:text-2xl md:text-xl'>{title}</h3>
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

export default Galeri