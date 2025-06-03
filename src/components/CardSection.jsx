import React from "react";
import { Map, Brain, Trophy, Cuboid as Android } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CardSection() {
  const { t } = useTranslation();
  return (
    <div
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20 mt-0"
      id="section2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl  font-bold text-center dark:text-white text-gray-900 mb-20 px-4">
          {t("whyChooseApp")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Map className="w-8 h-8 text-blue-600 dark:text-blue-300" />}
            title="Interactive Maps"
            description="Μάζεψε νομίσματα απαντώντας σωστά και ξεκλείδωσε νέες κατηγορίες."
            link='/header'
          />
          <FeatureCard
            icon={
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            }
            title="Learn & Remember"
            description="Αγόρασε βοήθειες και ζωές για να συνεχίσεις όταν δυσκολεύεσαι."
          />
          <FeatureCard
            icon={
              <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            }
            title="Track Progress"
            description="Αντιμετώπισε αντιπάλους και δοκίμασε τις γνώσεις σου σε πραγματικό ανταγωνισμό για περισσότερα κέρδη."
          />
          <FeatureCard
            icon={
              <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            }
            title="Track Progress"
            description="Επικοινώνησε εύκολα με τον δημιουργό της εφαρμογής και μοιράσου προτάσεις ή προβλήματα."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, link}) {
  return (
    <>
    <div className="relative bg-white  dark:bg-gray-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
        {title}
      </h3>
      <p className="dark:text-gray-200 text-gray-600 pb-10">{description}</p>
       <Link to={link} className="absolute right-10 bottom-5 text-blue-500 dark:text-white hover:underline">
          More...
        </Link>
    </div>
    </>
  );
}

export default CardSection;
