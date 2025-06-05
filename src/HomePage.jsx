import { Link } from "react-router-dom";
import TitleSection from "./components/TitleSection";
import SectionTest from "./components/SectionTest";
import MockPhones from "./components/MockPhones";
import CardSection from "./components/CardSection";
import PreviewSection from "./components/PreviewSection";
import MockTablet from "./components/MockTablet";
import MultipleCategories from "./components/MultipleCategories";

function HomePage() {
  return (
    <>
      <TitleSection />
      <MultipleCategories />
      <div className="bg-white dark:bg-gray-900 w-full ">
        <h2 className="text-3xl lg:text-4xl  font-bold text-center dark:text-white text-gray-900 my-20 dark:mb-0 md:dark:my-20">
          Mobile - Tablet/iPad
        </h2>
      </div>
      {/* <SectionTest/> */}
      <MockPhones />
      <MockTablet />
      <CardSection />
      <PreviewSection />
    </>
  );
}

export default HomePage;
