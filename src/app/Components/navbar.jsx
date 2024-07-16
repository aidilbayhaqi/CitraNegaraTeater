'use client'
import React from 'react'
import logo from '@/app/assets/img/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
       setIsOpen(!isOpen);
     };


  return (
    <section
      className={`w-screen mx-auto fixed ease-in-out opacity-80 z-50 ${
        scroll || isOpen ? "bg-[#121212]" : "bg-transparent"
      }`}
    >
      <nav className="flex flex-wrap justify-between relative">
        <div className="flex flex-shrink-0 px-10">
          <Image src={logo} alt="" width={100} height={60} />
        </div>
        <div class="p-5 block lg:hidden">
          <button
            onClick={toggleMenu}
            class="flex items-center px-3 py-2 my-3 rounded border border-transparent text-white hover:text-white hover:border-white"
          >
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow p-5 lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="block font-bold text-xl mt-4 lg:inline-block lg:mt-0 mr-10 opacity-80 hover:opacity-100 "
          >
            Home
          </Link>
          <Link
            href="/galeri"
            className="block font-bold text-xl mt-4 lg:inline-block lg:mt-0 mr-10 opacity-80 hover:opacity-100 "
          >
            Galeri
          </Link>
          <Link
            href="/karya"
            className="block font-bold text-xl mt-4 lg:inline-block lg:mt-0 mr-10 opacity-80 hover:opacity-100 "
          >
            Karya
          </Link>
          <Link
            href="/prestasi"
            className="block font-bold text-xl mt-4 lg:inline-block lg:mt-0 mr-10 opacity-80 hover:opacity-100 "
          >
            Prestasi
          </Link>
          <Link
            href="/struktur"
            className="block font-bold text-xl mt-4 lg:inline-block lg:mt-0 mr-10 opacity-80 hover:opacity-100 "
          >
            Struktur
          </Link>
          <button className="items-end justify-end m-auto mt-8 mr-5 lg:mt-5">
            <Link
              href={"/daftar"}
              className="font-bold p-5 bg-gradient-custom border-2 border-sky-500 rounded-xl "
            >
              JOIN WITH US
            </Link>
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar