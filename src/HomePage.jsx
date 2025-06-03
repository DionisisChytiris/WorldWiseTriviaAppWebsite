import { Link } from "react-router-dom";
import TitleSection from "./components/TitleSection";
import SectionTest from "./components/SectionTest";
import MockPhones from "./components/MockPhones";
import CardSection from "./components/CardSection";
import PreviewSection from "./components/PreviewSection";
import MockTablet from "./components/MockTablet";

function HomePage() {
  return (
    <>
    <TitleSection/>
    {/* <SectionTest/> */}
    <MockPhones/>
    <MockTablet/>
    <CardSection/>
    <PreviewSection/>
    </>
  );
}

export default HomePage;
