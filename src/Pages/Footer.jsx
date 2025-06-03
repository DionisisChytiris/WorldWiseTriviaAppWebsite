import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
   const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12" id="section3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t("startJourney")}
          </h3>
          <p className="text-gray-400 mb-8">
            {t("downloadNowFooter")}
          </p>
          <a href="#download-buttons">

          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            {t("getStarted")}
          </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
