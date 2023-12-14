import React, { useState, useEffect } from "react";
import nizarFavicon from "/src/assets/avatar.png";
import { HiArrowDownLeft } from "react-icons/hi2";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#222222] h-fit w-screen px-6 pt-16 text-white md:px-20 md:pt-[150px] lg:px-[150px] lg:pb-10 mt-20">
      <div className="flex gap-4 justify-start items-center text-4xl md:text-[44px] xl:text-[50px] xl:gap-6">
        <img className="w-10 xl:w-20" src={nizarFavicon} alt="miniAvatar" />
        <p>Let's work</p>
      </div>
      <div className="flex justify-between pb-16">
        <p className="text-4xl mt-2 md:text-[44px] xl:text-[50px] xl:mt-4">
          together
        </p>
        <HiArrowDownLeft size={50} />
      </div>
      <div className="border-t-[#a6a6a6] border-t"></div>
      <div className="flex flex-col justify-center items-center gap-4 py-16 md:flex-row font-medium">
        <button className="px-10 py-4 rounded-[30px] border-[#a6a6a6] border w-full">
          nizaralmas01@gmail.com
        </button>
        <button className="px-10 py-4 rounded-[30px] border-[#a6a6a6] border w-full">
          +90 552 511 98 52
        </button>
      </div>
      <div className="flex flex-col gap-2 pb-6 border-b-[#a6a6a6] border-b">
        <p className="text-[#C0C0C0] text-[12px]">SOCIAL</p>
        <ul className="flex gap-4">
          <a href="https://www.instagram.com/nihhzaeyy/" target="_blank">
            <li>Instagram</li>
          </a>
          <a
            href="https://www.linkedin.com/in/muchammad-nizar-almas-sukirno/"
            target="_blank"
          >
            <li>LinkedIn</li>
          </a>
          <li>Twitter</li>
        </ul>
      </div>
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

export default Footer;
