import React, { useState, useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import NameText from "../components/nameText/NameText";
import Major from "../components/Major";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

// import Hello from "../components/hello/Hello";
import NavButton from "../components/button/NavButton";
import "../components/button/navButton.css"; //nav-button style
import "../components/navigation/sideNav.css";
import SideNav from "../components/navigation/SideNav";

const Home = () => {
  const [showNavButton, setShowNavButton] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prevShowSideNav) => !prevShowSideNav);
  };
  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;

      if (positionY > 60) {
        setShowNavButton(true);
      } else {
        setShowNavButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div
        className={`nav-button-container ${showNavButton ? "show" : "hide"}`}
      >
        <NavButton toggleSideNav={toggleSideNav} />
      </div>
      <div className={`fixed side-nav ${showSideNav ? "show" : ""}`}>
        <SideNav />
      </div>
    </div>
  );
};

export default Home;
