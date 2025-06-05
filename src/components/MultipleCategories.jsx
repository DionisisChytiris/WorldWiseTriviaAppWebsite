import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Map,
  Brain,
  Trophy,
  Cuboid as Android,
  Building,
  Landmark,
  Mountain,
  Flag,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function MultipleCategories() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once when entering
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="py-10 md:py-20 bg-blue-50 dark:bg-gray-900 scroll-mt-20 mt-0"
      id="section2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl  font-bold text-center dark:text-white text-gray-900 mb-10 md:mb-20 px-4">
          {t("multipleCategories")}
        </h2>
        {/* Large Screens */}
        <div className="hidden md:grid grid-cols-4 sm:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          <FeatureCard
            icon={<Flag className="w-6 h-6 text-blue-600 dark:text-blue-300" />}
            img="/multiplecategories/flags.png"
            title={t("flags")}
          />
          <FeatureCard
            icon={
              <Building className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            }
            img="/multiplecategories/capitals.webp"
            title={t("capitals")}
          />
          <FeatureCard
            icon={
              <Landmark className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            }
            img="/multiplecategories/worldmnt.webp"
            title={t("worldMnt")}
          />
          <FeatureCard
            icon={
              <Mountain className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            }
            img="/multiplecategories/ntrmnt.webp"
            title={t("natMnt")}
          />
        </div>
        {/* Medium-Small screens */}
        <div className="block md:hidden">
          <div className="w-3/4 ml-[5%] mb-3" data-aos="fade-right">
            <FeatureCardLeft
              icon={
                <Flag className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              img="/multiplecategories/flags.png"
               title={t("flags")}
            />
          </div>
          <div className="w-3/4 ml-[19%] mb-3" data-aos="fade-left">
            <FeatureCardRight
              icon={
                <Building className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              img="/multiplecategories/capitals.webp"
              title={t("capitals")}
            />
          </div>
          <div className="w-3/4 ml-[5%] mb-3" data-aos="fade-right">
            <FeatureCardLeft
              icon={
                <Landmark className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              img="/multiplecategories/worldmnt.webp"
              title={t("worldMnt")}
            />
          </div>
          <div className="w-3/4 ml-[19%]" data-aos="fade-left">
            <FeatureCardRight
              icon={
                <Mountain className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              }
              img="/multiplecategories/ntrmnt.webp"
              title={t("natMnt")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, img, title }) {
  return (
    <>
      <div className="relative bg-white  dark:bg-gray-500 px-2 py-6 md:py-4 md:px-0 rounded-xl ">
        <div className="flex flex-row items-center justify-center">
          <div className="pr-2">{icon}</div>
          <h3 className="text-[18px] md:text-[14px] lg:text-xl font-semibold dark:text-white text-gray-900  text-center">
            {title}
          </h3>
        </div>
        <img
          src={img}
          alt="QR code"
          className="w-5/6 mx-auto md:pt-4 lg:pt-6"
          // className="rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-400  w-5/6  mx-auto  md:pt-4 lg:pt-6"
        />
      </div>
    </>
  );
}
function FeatureCardLeft({ icon, img, title }) {
  return (
    <>
      <div className="relative flex flex-row items-center justify-between bg-gray-300 dark:bg-gray-600 px-2 py-2 rounded-xl">
        <img
          src={img}
          alt="QR code"
          className="w-1/4"
          // className="rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-400  w-1/3 sm:w-1/4"
        />
        <h3 className="text-[16px] text-left font-semibold dark:text-white text-gray-900">
          {title}
        </h3>
        <div className="pr-2">{icon}</div>
      </div>
    </>
  );
}
function FeatureCardRight({ icon, img, title }) {
  return (
    <>
      <div className="relative flex flex-row items-center justify-between bg-gray-300 dark:bg-gray-600 px-2 py-2 rounded-xl">
        <img
          src={img}
          alt="QR code"
          className="w-1/4 mr-2"
          // className="rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-400 w-1/3 sm:w-1/4 mr-2"
        />
        <h3 className="text-[16px] font-semibold dark:text-white text-gray-900 text-center mr-2">
          {title}
        </h3>
        <div className="pr-2">{icon}</div>
      </div>
    </>
  );
}

export default MultipleCategories;
