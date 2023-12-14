import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const ReuseNav = () => {
  return (
    <div className="flex justify-between items-center py-8 px-6 font-medium w-screen md:text-base md:px-10 xl:text-xl xl:px-12 xl:py-10">
      <Link to="/">
        <p>&#x24B8; Code by Nizar</p>
      </Link>
      <div className="flex gap-2 justify-center items-center md:hidden">
        <div className="w-[6px] h-[6px] bg-dot2 rounded-full"></div>
        <p>Menu</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8">
          <Link to="/work">
            <li className="underlined_text2">Work</li>
          </Link>
          <Link to="/about">
            <li className="underlined_text2">About</li>
          </Link>
          <Link to="">
            <li className="underlined_text2">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ReuseNav;
