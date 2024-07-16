import Image from "next/image";
import Navbar from "./Components/navbar";
import './globals.css'
import icon from '@/app/assets/img/IconHome.png'
import Link from "next/link";
import AboutHome from "./home/about";
import Prestasi from "./home/prestasi";
import Aktivitas from "./home/aktivitas";

export default function Home() {
  return (
    <div>
      <section className="bg-custom-image w-screen mx-auto p-5 overflow-x-hidden">
        <div className="grid mt-0 lg:grid-cols-2 md:grid-cols-1">
          <div className="w-full mx-5 p-5">
            <span className="font-bold bg-gradient-custom p-2 lg:ml-20 lg:text-2xl md:ml-0 md:text-xl">
              SELAMAT DATANG DI CITTER
            </span>
            <h1 className="font-bold mt-3 p-2 lg:ml-20 lg:text-5xl md:ml-0 md:text-xl">
              CITRA NEGARA TEATER
            </h1>
            <p className="mt-3 p-2 tracking-wide text-justify lg:ml-20 md:ml-0">
              Citter (Citra Negara Teater) merupakan ekstrakulikuler di sekolah
              Citra Negara depok yang berfokus dalam mempelajari seni peran dan
              akting.
            </p>
            <div className="mt-5 lg:ml-20 md:ml-0">
              <Link
                href={"https://www.instagram.com/citter_/"}
                className="font-bold bg-transparent p-3 border-2 border-sky-500 rounded-lg hover:bg-gradient-custom transition-all"
              >
                Instagram Kami
              </Link>
            </div>
          </div>
          <div className="w-full mx-5 p-5">
            <Image src={icon} className="lg:w-full md:w-1/2 md:m-0"></Image>
          </div>
        </div>
      </section>
      <AboutHome />
      <Prestasi />
      <Aktivitas />
    </div>
  );
}
