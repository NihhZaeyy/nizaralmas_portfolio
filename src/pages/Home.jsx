import React from "react";
import Navbar from "../components/Navbar";
import NameText from "../components/nameText/NameText";
import Major from "../components/Major";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

// import Hello from "../components/hello/Hello";
import NavButton from "../components/button/navButton";

const Home = () => {
  return (
    <div className="w-screen h-fit relative">
      <div className="h-screen lg:h-fit w-screen bg-[url('/src/assets/nizaralmas-image.jpg')] bg-cover bg-center flex flex-col justify-between overflow-x-hidden">
        {/* <div className="fixed w-full h-full left-0 top-0">
            <Hello />
        </div> */}
        <Navbar />
        <div className="hidden md:block">
          <Major />
        </div>
        <div className="md:flex md:flex-col-reverse">
          <div className="flex flex-col justify-end items-start">
            <NameText />
          </div>
          <div className="md:hidden">
            <Major />
          </div>
        </div>
      </div>
      <div>
        <About />
        <Projects />
        <Footer />
      </div>
      <NavButton />
    </div>
  );
};

export default Home;
