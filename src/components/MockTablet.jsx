import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { mockTabletEs } from "../assets/MockTablet/MockTabletEs";
import { mockTabletEn } from "../assets/MockTablet/MockTabletEn";
import { mockTabletGr } from "../assets/MockTablet/MockTabletGr";

const MockTablet = () => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Select screenshots based on current language
  let screenshots = mockTabletEn;
  if (i18n.language === "es") {
    screenshots = mockTabletEs;
  } else if (i18n.language === "gr") {
    screenshots = mockTabletGr;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Phone Mockups */}
      <div
        className="relative pt-16 mb-8 flex justify-center items-center overflow-hidden " // Changed overflow-hidden to overflow-x-auto
        style={{
          width: "100%", // Ensure the container has enough space to scroll
        }}
      >
        {currentIndex === 0 ? (
          <div className="p-2 rounded-full bg-gray-700 hover:bg-red-500 text-white  mr-20 hidden sm:hidden md:block">
            <X className="w-6 h-6 text-gray-100" />
          </div>
        ) : (
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition mr-20 hidden sm:hidden md:block"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="sm:flex ">
          {screenshots[currentIndex] && (
            <div
              className="relative w-full min-h-[28rem] min-w-[17.9rem] max-w-md 
             sm:h-[28.2rem] sm:w-[18rem] 
             md:w-[21rem] md:h-[33rem] 
             xl:w-[22rem] xl:h-[34.7rem] 
             z-10 transform -translate-y-12 shrink-0 grow-0 basis-auto shadow-xl shadow-gray-500 dark:shadow-gray-600 rounded-[1.5rem]"
            >
              <div className="absolute inset-0 bg-gray-500 rounded-[1.5rem] p-2">
                <div className="relative w-full h-full bg-white rounded-[1rem] overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-[0.65rem] bg-black z-0" />

                  <img
                    src={screenshots[currentIndex].phone}
                    alt="App Screenshot 2"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {screenshots.length > 0 && currentIndex < screenshots.length - 1 ? (
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition ml-20 hidden sm:hidden md:block"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        ): (
          <div className="p-2 rounded-full text-white bg-gray-700 hover:bg-red-500 transition ml-20 hidden sm:hidden md:block">
            <X className="w-6 h-6 text-gray-100" />
          </div>
        )}
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center -mt-8 md:mt-8 gap-4 pb-20">
        {currentIndex === 0 ? null : (
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition block sm:block md:hidden"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 md:w-6 h-4 md:h-6" />
          </button>
        )}
        <div className="flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
        {screenshots.length > 0 && currentIndex < screenshots.length - 1 && (
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition block sm:block md:hidden"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 md:w-6 h-4 md:h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MockTablet;
