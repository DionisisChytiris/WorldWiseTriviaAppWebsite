import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Cuboid as Android, ChevronLeft, ChevronRight } from "lucide-react";
import { mockPhonesEn } from "../assets/MockPhones/MockPhonesEn.js";
import { mockPhonesEs } from "../assets/MockPhones/MockPhonesEs.js";
import { mockPhonesGr } from "../assets/MockPhones/MockPhonesGr.js";

const MockPhones = () => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  let screenshots = mockPhonesEn;
  if (i18n.language === "es") {
    screenshots = mockPhonesEs;
  } else if (i18n.language === "gr") {
    screenshots = mockPhonesGr;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // const getImage = (index) => {
  //   const validIndex =
  //     ((index % screenshots.length) + screenshots.length) % screenshots.length;
  //   return screenshots[validIndex].phone;
  // };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-0 md:pt-10">
      {/* Phone Mockups */}
      <div
        className="relative pt-16 pb-10 flex justify-center items-center overflow-hidden " // Changed overflow-hidden to overflow-x-auto
      >
        <div className="sm:flex sm:flex-col md:flex-row">
          {/* Left Phone */}
          {screenshots[currentIndex] && (
            <div className="relative w-[12rem] h-[25.75rem]  z-0 transform lg:-translate-x-32 md:-translate-x-10  sm:-translate-y-14 md:-translate-y-0 shrink-0 grow-0 basis-auto -rotate-0 shadow-2xl shadow-gray-900 dark:shadow-gray-600 rounded-[1.3rem]">
              <div className="absolute inset-0 bg-black rounded-[1.3rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  {/* <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" /> */}
                  <img
                    src={screenshots[currentIndex].phone}
                    srcSet={`${screenshots[currentIndex].phone} 2x`}
                    // src={getImage(currentIndex)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Center Phone */}
          {screenshots[currentIndex + 1] && (
            <div className="relative w-[14rem] h-[29.75rem] z-10 transform -translate-y-12 shrink-0 grow-0 basis-auto hidden md:block shadow-2xl shadow-gray-700 dark:shadow-gray-600 rounded-[1.5rem]">
              <div className="absolute inset-0 bg-black rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />
                  <img
                    src={screenshots[currentIndex + 1].phone}
                    // src={getImage(currentIndex+1)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Right Phone */}
          {screenshots[currentIndex + 2] && (
            <div className="relative w-[12rem] h-[25.75rem]  z-0 transform lg:translate-x-32 md:translate-x-10  shrink-0 grow-0 basis-auto rotate-0  hidden md:block shadow-2xl shadow-gray-900 dark:shadow-gray-600 rounded-[1.5rem]">
              <div className="absolute inset-0 bg-black rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />
                  <img
                    src={screenshots[currentIndex + 2].phone}
                    // src={getImage(currentIndex+2)}
                    alt="App Screenshot 2"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center  gap-4 mb-20">
        {currentIndex === 0 ? null : (
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
        {screenshots.length > 0 && currentIndex < screenshots.length - 1 && (
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MockPhones;
