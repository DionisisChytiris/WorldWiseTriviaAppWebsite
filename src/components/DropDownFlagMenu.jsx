import { useState } from "react";
import { useTranslation } from "react-i18next";

function DropDownFlagMenu({ changeLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative ml-14">
      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-2 rounded"
      >
        🌐 {t('language')}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-800 rounded shadow-lg p-2 flex flex-col items-center  gap-2 z-50">
          <button onClick={() => { changeLanguage("en"); setIsOpen(false); }}>
            <img src="/i18nFlags/uk.png" alt="English" className="w-6 h-4 hover:border-2" />
          </button>
          <button onClick={() => { changeLanguage("es"); setIsOpen(false); }}>
            <img src="/i18nFlags/spain.png" alt="Spanish" className="w-6 h-4 hover:border-2" />
          </button>
          <button onClick={() => { changeLanguage("gr"); setIsOpen(false); }}>
            <img src="/i18nFlags/greece.png" alt="Greek" className="w-6 h-4 hover:border-2" />
          </button>
        </div>
      )}
    </div>
  );
}
export default DropDownFlagMenu
