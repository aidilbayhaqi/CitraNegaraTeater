import React from "react";
import "@/app/globals.css";
import IconHome2 from "@/app/assets/img/IconHome2.png";

import Image from "next/image";

const AboutHome = () => {
  return (
    <section className="">
      <div className="w-3/4 p-10 mx-auto bg-gradient-about rounded-3xl -mt-36 md:w-3/4 lg:w-3/4">
        <h1 className="text-3xl font-bold text-center lg:text-6xl md:text-4xl sm:text-4xl">
          TENTANG CITTER
        </h1>
        <h2 className=" font-bold mb-2 text-center mt-5 lg:text-3xl md:text-xl">
          CITTER TUH APASIH? KENAPA HARUS CITTER?
        </h2>
        <p className="text-lg mb-2 text-justify">
          CITTER (Citra Negara Teater), kami adalah salah satu kegiatan
          ekstrakulikuler di SMK CITRA NEGARA DEPOK dalam bentuk pergelaran seni
          teater, CITTER dibentuk pada 8 September 2012 dengan 4 orang pelatih
          yaitu Bang Ucok Lubis, Kak Vicky, Kak Aries, dan Kak Eka.
        </p>
        <p className="text-lg mb-2 text-justify">
          Sampai saat ini CITTER sudah mulai memasuki angkatan ke-13 dengan
          jumlah anggota lebih dari 100 orang. Pementasan perdana kami
          diselenggarakan pada tahun 2012 dalam rangka Festival Teater Anak
          dengan membawakan lakon "Dolananku".
        </p>
        <p className="text-lg mb-2 text-justify">
          Serta lakon-lakon selanjutnya kami mulai di Festival Teater SLTA
          Se-JABODETABEK ke 23 dengan lakon "EMOSI HUJAN" dan tahun tahun
          berikut nya dengan lakon "PERGERAKAN", "AKU VS AYAHKU", "DESEMBER",
          "DIBALIK PUTIH", "GARA-GARA BABEH", "DISIDEN". Saat ikut Festival
          Teater se-kota Depok lakon yang kami bawakan adalah "KEMBAR SIAM". Di
          luar FTS kami sudah menggelar pentas tunggal di sekolah pada tanggal
          28 November 2015 dengan lakon "GONG SI BOLONG" dan "MENTANG MENTANG
          DARI NEW YORK". Dan mengikuti beberapa monolog seperti FESTIVAL
          MONOLOG (TINGKAT NASIONAL) UIN 2017, FESTIVAL MONOLOG SLTA 2019, dan
          tahun 2022 MONOLOG SPOT (Spirit Pankreas On Art) 14. Lalu baru-baru
          ini CITTER mengikuti Festival Teater Madya 2023 dengan membawakan
          lakon "KEPENDEL".
        </p>

        <p className="text-lg mb-2 text-justify">
          Kami juga ikut aktif mengisi acara pentas seni di sekolah, salah satu
          lakonnya adalah "KLISE", "TJAHAJA", "BABEH VS JUKI", "GOLDEN
          RHAPSODY", dan baru-baru ini kami membawakan lakon "DI AKHIR PERANG".
          Setiap mulai latihan kita diawali dengan doa dan diakhiri dengan doa
          juga ditambah salam kekeluargaan CITTER.
        </p>
      </div>
    </section>
  );
};

export default AboutHome;
