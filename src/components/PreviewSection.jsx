import React from "react";
import {
  Map,
  Brain,
  Star,
  Trophy,
  Cuboid as Android,
  Book,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function PreviewSection() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="py-24 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl  lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-14 md:mb-12 lg:mb-24 px-4 text-center">
                {t("journeyTitle")}
              </h2>
              <div className="space-y-6">
                <Feature
                  icon={<Star className="w-6 h-6 text-yellow-500" />}
                  title="Πολλαπλές Κατηγορίες"
                  description="From ancient cities to modern regions, test your knowledge across various topics."
                />
                <Feature
                  icon={<Book className="w-6 h-6 text-green-500" />}
                  title="Μάθηση και πρόκληση"
                  description="Learn anywhere, anytime - no internet connection required."
                />
                <Feature
                  icon={<Brain className="w-6 h-6 text-purple-500" />}
                  title="Δοκίμασε τις ικανότητές σου "
                  description="Intuitive design makes learning geography fun and engaging."
                />
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/worldimg.png"
                // src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80"
                alt="natural monuments"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-white rounded-lg shadow-md">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default PreviewSection;
