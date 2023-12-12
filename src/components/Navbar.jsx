import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-6 text-white font-medium w-screen md:text-base md:px-10 xl:text-xl xl:px-12 xl:py-10">
      <p>&#x24B8; Code by Nizar</p>
      <div className="flex gap-2 justify-center items-center md:hidden">
        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
        <p>Menu</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8">
          <Link to="">
            <li>Work</li>
          </Link>
          <Link to="">
            <li>About</li>
          </Link>
          <Link to="">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
