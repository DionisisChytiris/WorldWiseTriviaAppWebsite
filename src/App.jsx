import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TopImage from "./components/TopImage";
import HomePage from "./HomePage";
import Header from "./Pages/Header";
import Navbar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MultCtg from "./Pages/MultCtg";
import LearnRemember from "./Pages/LearnRemember";
import DiverseTypes from "./Pages/DiverseTypes";
import DiscoverMaps from "./Pages/DiscoverMaps";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ScrollToTop/>
        <Navbar
          darkMode={darkMode}
          onClick={() => setDarkMode((prev) => !prev)}
        />
        {/* <TopImage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/multCtg" element={<MultCtg />} />
          <Route path="/learnRemember" element={<LearnRemember />} />
          <Route path="/diverseTypes" element={<DiverseTypes />} />
          <Route path="/discoverMaps" element={<DiscoverMaps />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
