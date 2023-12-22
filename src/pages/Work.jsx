import React, { useState, useEffect } from "react";
import ReuseNav from "../components/navigation/ReuseNav";
import Text from "../components/WorkComps/Text";
import NavButton from "../components/button/NavButton";
import SideNav from "../components/navigation/SideNav";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import Archieved from "../components/projects/Archieved";

const Work = () => {
  const [showNavButton, setShowNavButton] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [showArchieved, setShowArchived] = useState(false);

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

  const handlerArchieve = () => {
    setShowArchived(true);
  };
  const handlerProject = () => {
    setShowArchived(false);
  };
  return (
    <div className="w-screen h-fit relative">
      <ReuseNav title={"Project"} />
      <Text project={handlerProject} archieved={handlerArchieve} />
      <div
        className={`nav-button-container ${showNavButton ? "show" : "hide"}`}
      >
        <NavButton toggleSideNav={toggleSideNav} />
      </div>
      <div className={`fixed side-nav ${showSideNav ? "show" : ""}`}>
        <SideNav />
      </div>
      <div className="mt-10">
        {showArchieved ? <Archieved /> : <Projects />}
      </div>
      <Footer />
    </div>
  );
};

export default Work;
