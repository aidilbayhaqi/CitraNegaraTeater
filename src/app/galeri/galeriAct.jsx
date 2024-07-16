'use client'
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { adegan, artistik, danus, kostum } from '../Components/data';

const GaleriAct = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State untuk menentukan tab aktif

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="w-full mt-8 mx-auto items-center bg-gradient-about">
        <div className="p-10 text-center">
          <h1 className="font-bold text-3xl lg:text-6xl">AKTIVITAS CITTER</h1>
        </div>

        <div className="w-screen mx-auto">
          <div className="items-center justify-between text-center mx-auto border-gray-200">
            <button
              className={`px-4 py-2 text-sm focus:outline-none font-bold rounded-lg hover:bg-sky-500 ${
                activeTab === "tab1" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              ADEGAN
            </button>
            <button
              className={`px-4 py-2 text-sm focus:outline-none font-bold rounded-lg hover:bg-sky-500 ${
                activeTab === "tab2" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              ARTISTIK
            </button>
            <button
              className={`px-4 py-2 text-sm focus:outline-none font-bold rounded-lg hover:bg-sky-500 ${
                activeTab === "tab3" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              DANUS
            </button>
            <button
              className={`px-4 py-2 text-sm focus:outline-none font-bold rounded-lg hover:bg-sky-500 ${
                activeTab === "tab3" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("tab4")}
            >
              KOSTUM
            </button>
          </div>

          <div className="mt-4 mx-auto p-5">
            {activeTab === "tab1" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {adegan.map(({ Img, title, desc }, index) => {
                  return (
                    <div key={index} className="image-container transition-all rounded-lg hover:scale-110 hover:opacity-50">
                      <Image
                        src={Img}
                        alt="Image"
                        className="image p-3 rounded-xl"
                      />
                      <div className="image-overlay hover:opacity-100 text-center">
                        <h3 className="font-bold text-xl lg:text-2xl md:text-xl">
                          {title}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {artistik.map(({ Img, title, desc }, index) => {
                  return (
                    <div key={index} className="image-container transition-all rounded-lg hover:scale-110 hover:opacity-50">
                      <Image
                        src={Img}
                        alt="Image"
                        className="image p-3 rounded-xl"
                      />
                      <div className="image-overlay hover:opacity-100 text-center">
                        <h3 className="font-bold text-xl lg:text-2xl md:text-xl">
                          {title}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {danus.map(({ Img, title, desc }, index) => {
                  return (
                    <div key={index} className="image-container transition-all rounded-lg hover:scale-110 hover:opacity-50">
                      <Image
                        src={Img}
                        alt="Image"
                        className="image p-3 rounded-xl"
                      />
                      <div className="image-overlay hover:opacity-100 text-center">
                        <h3 className="font-bold text-xl lg:text-2xl md:text-xl">
                          {title}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {kostum.map(({ Img, title, desc }, index) => {
                  return (
                    <div key={index} className="image-container transition-all rounded-lg hover:scale-110 hover:opacity-50">
                      <Image
                        src={Img}
                        alt="Image"
                        className="image p-3 rounded-xl"
                      />
                      <div className="image-overlay hover:opacity-100 text-center">
                        <h3 className="font-bold text-xl lg:text-2xl md:text-xl">
                          {title}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};


export default GaleriAct