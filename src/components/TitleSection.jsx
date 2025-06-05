import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

export default function TitleSection() {
  const { t } = useTranslation();
  return (
    <header className="relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-10 md:pt-20 pb-16 text-center scroll-mt-20 mt-5"
        id="section1"
      >
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-customBlue dark:text-white mb-2 lg:mb-8" >
          {t("title1")}
        </h1>
        {/* <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6"> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold text-customBlue dark:text-white mb-4 md:mb-5 lg:mb-12">
          {t("title2")}
        </h1>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-customBlue dark:text-white mb-4 sm:mb-8 lg:mb-20">
          {t("title3")}
        </h1>
        <p className="px-10 text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-200 font-medium pb-14  pt-5 md:pt-10 max-w-3xl mx-auto"  id='download-buttons'>
          {t("subtitle1")}       
        </p>

       
        <div className="flex flex-row justify-center gap-4 mb-8 mt-0 md:mt-10">
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 mt-10"> */}
          <a
            // href="#"
            href="https://apps.apple.com/app/id6504780092"
            target="_blank"
            className="inline-flex items-center bg-gray-500 dark:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:dark:bg-gray-800  transition"
          >
            <AiFillApple className="text-white mr-2" size={24} />
            {/* <Apple className="w-6 h-6 mr-2" /> */}
            <div className="hidden sm:block  mr-2">{t("download")}</div>
            <div>iOS</div>
          </a>

          <a
            // href="#"
            href="https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion"
            target="_blank"
            className="inline-flex items-center bg-green-600 dark:bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:dark:bg-green-700 transition"
          >
            <AiFillAndroid className="text-white mr-2" size={24} />

            <div className="hidden sm:block  mr-2">{t("download")}</div>
            <div>Android</div>
          </a>
        </div>

        <div className=" hidden sm:block">
          <img src="/worldwisesmartLInk.png" alt="QR code" className="rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-400 w-1/5  lg:w-1/6 mx-auto mt-20" />
        </div>
       
        <div className="mt-20 md:mt-32 mb-20">
          <img
            src="/mainimg.png"
            alt="Ancient Greek ruins"
            className="rounded-lg shadow-2xl w-full md:w-full lg:w-5/6 mx-auto"
          />
        </div>

         <div className="px-10 text-lg sm:text-lg lg:text-2xl text-gray-500  dark:text-gray-400 font-medium max-w-3xl mx-auto py-0 md:py-20">
         {t("subtitle2")}
        </div>
      </div>
    </header>
  );
}
