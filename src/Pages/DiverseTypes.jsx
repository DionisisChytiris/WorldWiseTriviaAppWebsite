import "../tailwindStyles/tailwind-carousel-fix.css";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageCarousel from "../components/ImageCarousel";
import TopImage from "../components/TopImage";

const images = [
  "/phone/en/img0.png",
  "/phone/en/img1.png",
  "/phone/en/img2.png",
  "/phone/en/img3.png",
  "/phone/en/img4.png",
  "/phone/en/img5.png",
  // "/phone/en/img6.png",
];


function DiverseTypes() {
  const { t } = useTranslation();
 
   const ArrowBase =
     "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-80";
 
   //   const ArrowBase =
   // 'hidden sm:flex absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-80';
 
   const PrevArrow = ({ onClick }) => (
     <div className={`${ArrowBase} -left-20`} onClick={onClick}>
       <FaChevronLeft size={20} />
     </div>
   );
 
   const NextArrow = ({ onClick }) => (
     <div className={`${ArrowBase} -right-20`} onClick={onClick}>
       <FaChevronRight size={20} />
     </div>
   );
 
   const settings = {
     dots: true,
     centerMode: true,
     centerPadding: "0px",
     slidesToShow: 3,
     infinite: true,
     arrows: true,
     speed: 500,
     autoplay: false,
     prevArrow: <PrevArrow />,
     nextArrow: <NextArrow />,
   };
 
   return (
    <>    
     <TopImage img='/meteora.jpg'/>
     <div
       className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-10 md:pt-20 pb-16 text-center scroll-mt-20 mt-5 "
       id="section1"
     >
      
       <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-customBlue dark:text-white mb-12 lg:mb-8">
         {t("title1")}
       </h1>
 
        <div className="px-10 text-lg sm:text-lg lg:text-2xl text-gray-500  dark:text-gray-400 font-medium max-w-3xl mx-auto py-0 md:py-20">
          {t("subtitle2")}
         </div>
       <div className="w-full lg:w-[70%] pt-0 mt-24 mx-auto overflow-x-visible ">
         {/* <div className="mb-32">
 
         <ImageCarousel images={images}/>
         </div> */}
         <Slider {...settings}>
           {images.map((src, index) => (
             <div
               key={index}
               className="p-2 ml-5 md:ml-10 transition-transform duration-300"
             >
               <img
                 src={src}
                 alt={`slide-${index}`}
                 className="relative overflow-visible z-10 carousel-image w-[100%] sm:w-[60%] rounded-lg transition-transform duration-300"
               />
             </div>
           ))}
         </Slider>
       </div>
        <div className="px-10 text-lg sm:text-lg lg:text-2xl text-gray-500  dark:text-gray-400 font-medium max-w-3xl mx-auto py-0 md:py-20">
          {t("subtitle2")}
         </div>
         
        <h1 className="text-3xl font-bold">Header Page</h1>
        {/* <h1 className="text-3xl font-bold">Header Page</h1> */}
       
     </div>
     </>
   );
 }
 

export default DiverseTypes
