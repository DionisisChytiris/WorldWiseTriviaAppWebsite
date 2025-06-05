import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DropDownFlagMenu from "../components/DropDownFlagMenu";
import { Link } from "react-router-dom";

function Navbar({ isInSection, onClick, darkMode }) {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollUp(false);
      }

      // Scrolling up near top only
      if (currentScrollY < 800 && currentScrollY < lastScrollY.current) {
        setScrollUp(true);
      }

      // if (currentScrollY > lastScrollY.current) {
      //   setScrollUp(false); // scrolling down
      // } else if (currentScrollY < 300){
      //   setScrollUp(true); // scrolling up
      // }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    // <nav className="bg-blue-500 p-4 sticky top-0 z-0 shadow-md">
    <nav className={"p-4 sticky top-0 z-50 bg-transparent backdrop-blur-sm"}>
      {/* <nav className={`p-4 sticky top-0 z-50 ${isInSection?  "bg-blue-300" : "bg-transparent"}`}> */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center justify-center sm:items-center sm:justify-start ">
              {/* Icon Container */}
              <div
                className={`${
                  !isInSection ? "bg-white" : "bg-blue-500"
                } w-12 h-12 rounded-xl flex items-center justify-center`}
              >
                <img
                  src="/logo2.png"
                  alt="App Screenshot"
                  className="object-cover pb-0"
                />
              </div>

              {/* Text Container */}
              <div
                className={`transition-all duration-300 ${
                  scrollUp
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                } flex-shrink-0  text-white text-xl flex items-center justify-center px-5 md:block lg:block hidden`}
              >
                World Wise Trivia
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#section1"
                className={`px-3 py-2 rounded-md text-md font-medium text-shadow-md hover:bg-blue-500 hover:text-white hover:dark:bg-blue-500 hover:dark:text-white  ${
                  !isInSection
                    ? "text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                    : "text-blue-500"
                }`}
              >
                {t("home")}
              </a>
              <a
                href="#section2"
                className={`${
                  !isInSection
                    ? "text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                    : "text-blue-500"
                } text-shadow-md hover:bg-blue-500 hover:text-white px-2 py-2 rounded-md text-md font-medium  hover:dark:bg-blue-500 hover:dark:text-white `}
              >
                {t("about")}
              </a>
              <a
                href="#section3"
                className={`${
                  !isInSection
                    ? "text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                    : "text-blue-500 "
                } text-shadow-md hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium  hover:dark:bg-blue-500 hover:dark:text-white `}
              >
                {t("contact")}
              </a>
              <button
                onClick={onClick}
                className="text-1xl p-2 rounded-full bg-gray-200 dark:bg-gray-700  hover:dark:bg-blue-500 hover:bg-blue-500 border-none "
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
              <DropDownFlagMenu changeLanguage={changeLanguage} />
              {/* <div className="ml-14 flex gap-5 absolute -right-40 top-6">
                <button onClick={() => changeLanguage("en")}>
                  <img
                    src="/i18nFlags/uk.png"
                    alt="Flag icon"
                    className="w-6 h-4"
                  />
                </button>
                <button onClick={() => changeLanguage("es")}>
                  <img
                    src="/i18nFlags/spain.png"
                    alt="Flag icon"
                    className="w-6 h-4"
                  />
                </button>
                <button onClick={() => changeLanguage("gr")}>
                  <img
                    src="/i18nFlags/greece.png"
                    alt="Flag icon"
                    className="w-6 h-4"
                  />
                </button>
              </div> */}
            </div>
          </div>
        </div>
        {/* <h1>{t("welcome")}</h1>
        <p>{t("description")}</p> */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-500 rounded-2xl">
            <a
              href="#section1"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("home")}
            </a>
            <a
              href="#section2"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("about")}
            </a>
            <a
              href="#section3"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("contact")}
            </a>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 ml-3 ">
                <button onClick={() =>{ changeLanguage("en"), setIsMobileMenuOpen(false)}}>
                  <img
                    src="/i18nFlags/uk.png"
                    alt="Flag icon"
                    className="w-8 h-5 transition-transform duration-100 hover:border-2"
                  />
                </button>
                <button onClick={() => {changeLanguage("es"),setIsMobileMenuOpen(false)}}>
                  <img
                    src="/i18nFlags/spain.png"
                    alt="Spanish"
                    className="w-8 h-5 transition-transform duration-100 hover:border-2"
                  />
                </button>
                <button onClick={() =>{ changeLanguage("gr"), setIsMobileMenuOpen(false)}}>
                  <img
                    src="/i18nFlags/greece.png"
                    alt="Greek"
                    className="w-8 h-5 transition-transform duration-100 hover:border-2"
                  />
                </button>
              </div>
              <button
                onClick={()=>{onClick(),setIsMobileMenuOpen(false)}}
                className="text-2xl p-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-transform duration-100 hover:dark:bg-gray-500  hover:bg-gray-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
