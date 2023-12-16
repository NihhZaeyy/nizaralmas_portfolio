import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MagneticHover from "../../utils/MagneticHover";

import "./sideNav.css";

const SideNav = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setShowList(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white pt-[110px] px-6 sm:px-10 lg:px-20">
      <div className="pb-6 mb-6 border-b-[#a6a6a6] border-b ">
        <p className="text-[#C0C0C0] text-[12px]">NAVIGATION</p>
      </div>
      <ul
        className={`text-5xl flex flex-col gap-6 mb-6 lg:mb-20 w-fit ${
          showList ? "show" : ""
        }`}
      >
        <MagneticHover>
          <li>
            <Link to="/">Home</Link>
          </li>
        </MagneticHover>
        <MagneticHover>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </MagneticHover>
        <MagneticHover>
          <li>
            <Link to="/about">About</Link>
          </li>
        </MagneticHover>
        <MagneticHover>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </MagneticHover>
      </ul>
      <div className="py-6 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[#C0C0C0] text-[12px]">VERSION</p>
          <p>2023 &#x24B8; Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#C0C0C0] text-[12px]">LOCAL TIME</p>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#C0C0C0] text-[12px]">LOCATION</p>
          <a href="https://maps.app.goo.gl/AxVoG5UmTgbp3zcy8" target="_blank">
            <p>Bursa, Türkiye</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
