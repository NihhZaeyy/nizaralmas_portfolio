import React, { useState, useEffect } from "react";
import ReuseNav from "../components/navigation/ReuseNav";
import Text from "../components/ContactComps/Text";
import NavButton from "../components/button/NavButton";
import SideNav from "../components/navigation/SideNav";
import ContactForm from "../components/ContactComps/ContactForm";
import Footer from "../components/ContactComps/Footer";

const Contact = () => {
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
    <div className="w-screen h-fit">
      <ReuseNav title={"Contact"} />
      <Text />
      <ContactForm />
      <Footer />
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

export default Contact;
