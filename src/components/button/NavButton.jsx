import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import MagneticHover from "../../utils/MagneticHover";

import "./navButton.css";

const NavButton = ({ toggleSideNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    toggleSideNav();
  };

  return (
    <MagneticHover>
      <button
        className="w-16 h-16 bg-[#222222] rounded-full flex justify-center items-center border border-[#a6a6a6] hover:brightness-110"
        onClick={handleClick}
      >
        <div className={`icon-wrapper ${isOpen ? "open" : ""}`}>
          {isOpen ? (
            <CgClose size={30} color="white" />
          ) : (
            <BiMenu size={30} color="white" />
          )}
        </div>
      </button>
    </MagneticHover>
  );
};

export default NavButton;
