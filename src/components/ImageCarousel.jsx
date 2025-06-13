import React, { useState } from "react";

// const images = [
//   "/images/img1.jpg",
//   "/images/img2.jpg",
//   "/images/img3.jpg",
//   "/images/img4.jpg",
//   "/images/img5.jpg",
// ];

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Middle one shown first

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleImages = () => {
    const total = images.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return [images[prevIndex], images[currentIndex], images[nextIndex]];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div className="relative flex items-center space-x-4 overflow-hidden">
        <button
          onClick={prev}
          className="absolute left-0 z-10 px-3 py-2 text-white bg-gray-700 rounded-l hover:bg-gray-900"
        >
          ‹
        </button>

        <div className="flex items-center justify-center w-[100%] h-[400px] max-w-full space-x-4 px-10">
          {visibleImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className={`transform transition-transform duration-[2000ms] ease-in-out rounded-lg shadow-lg ${
                idx === 1 ? "scale-110 z-10" : "scale-90 opacity-80"
              } w-[100%] h-[260px] object-cover`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-10 px-3 py-2 text-white bg-gray-700 rounded-r hover:bg-gray-900"
        >
          ›
        </button>
      </div>
    </div>
  );
}
