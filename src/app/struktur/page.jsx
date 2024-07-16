'use client'
import Image from 'next/image'
import React from 'react'
import { anggota, ketua } from '../Components/data';
import Link from 'next/link';

const Struktural = () => {
  return (
    <section className="w-screen mx-auto p-5">
      <div className="mt-20">
        <h1 className="font-bold text-center text-3xl lg:text-6xl">
          STRUKTUR CITTER
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-5">
        {ketua.map(({ Img, name, jabatan, link, desc }, index) => {
          return (
            <div className="border border-white rounded-xl p-10 m-5">
              <Link href={link}>
                <Image
                  src={Img}
                  className="hover:scale-105 transition-all"
                ></Image>
              </Link>
              <h1 className="text-center font-bold text-4xl lg:text-5xl mt-5">
                {name}
              </h1>
              <h3 className="font-bold text-center italic text-2xl lg:text-xl">
                {jabatan}
              </h3>
              {/* <Link href={link} className='mx-auto'>sosmed</Link> */}
              <p className="text-center mt-5">{desc}</p>
            </div>
          );
        })}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-5 mt-20">
        {anggota.map(({ Img, name, jabatan, link, desc }, index) => {
          return (
            <div className="border border-white rounded-xl p-10 m-5">
              <Link href={link}>
                <Image
                  src={Img}
                  className="hover:scale-110 transition-all"
                ></Image>
              </Link>
              <h1 className="text-center font-bold text-4xl lg:text-5xl mt-5">
                {name}
              </h1>
              <h3 className="font-bold text-center italic text-2xl lg:text-xl">
                {jabatan}
              </h3>
              {/* <Link href={link} className='mx-auto'>sosmed</Link> */}
              <p className="text-center mt-5">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Struktural