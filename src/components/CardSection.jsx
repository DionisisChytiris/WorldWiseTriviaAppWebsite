import React from "react";
import {
  Map,
  Brain,
  Trophy,
  Cuboid as Android,
  Star,
  Book,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toggle } from "../Redux/NavBooleanSlice";

function CardSection() {
  const { t } = useTranslation();
  return (
    <div
      className="py-10 md:py-20 bg-white dark:bg-gray-900 scroll-mt-20 mt-0"
      id="section2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl  font-bold text-center dark:text-white text-gray-900 mb-14 md:mb-20 px-4">
          {t("whyChooseApp")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Star className="w-8 h-8 text-blue-600 dark:text-blue-300" />}
            title={t("multipleCategories")}
            description={t("card1")}
            link="/multCtg"
          />
          <FeatureCard
            icon={<Book className="w-8 h-8 text-blue-600 dark:text-blue-300" />}
            title={t("diversetypes")}
            description={t("card2")}
            link="/diverseTypes"
          />
          <FeatureCard
            icon={
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            }
            title={t("learn")}
            description={t("card3")}
            link="/learnRemember"
          />
          <FeatureCard
            icon={<Map className="w-8 h-8 text-blue-600 dark:text-blue-300" />}
            title={t("featureTitle4")}
            description={t("card4")}
            link="/discoverMaps"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={link}
      onClick={() => dispatch(toggle())}
      className="relative bg-white  dark:bg-gray-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-6">
        {title}
      </h3>
      <p className="dark:text-gray-200 text-gray-600 pb-8">{description}</p>
      <div className="absolute right-10 bottom-5 text-blue-500 dark:text-white hover:underline">
        More...
      </div>
    </Link>
  );
}

export default CardSection;
