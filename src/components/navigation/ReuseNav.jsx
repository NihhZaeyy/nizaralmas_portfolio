import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import MagneticHover from "../../utils/MagneticHover";

const ReuseNav = ({ title }) => {
  return (
    <div className="flex justify-between items-center py-8 px-6 font-medium w-screen md:text-base md:px-10 xl:text-xl xl:px-12 xl:py-10">
      <MagneticHover>
        <Link to="/">
          <p className="underlined_text2">Nizar Almas</p>
        </Link>
      </MagneticHover>
      <div className="flex gap-2 justify-center items-center md:hidden">
        <div className="w-[6px] h-[6px] bg-dot2 rounded-full"></div>
        <p>{title}</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8">
          <MagneticHover>
            <Link to="/about">
              <li className="underlined_text2">About</li>
            </Link>
          </MagneticHover>
          <MagneticHover>
            <Link to="/project">
              <li className="underlined_text2">Project</li>
            </Link>
          </MagneticHover>
          <MagneticHover>
            <Link to="/contact">
              <li className="underlined_text2">Contact</li>
            </Link>
          </MagneticHover>
        </ul>
      </div>
    </div>
  );
};

export default ReuseNav;
