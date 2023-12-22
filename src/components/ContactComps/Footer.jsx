import React, { useState, useEffect } from "react";
import MagneticHover from "../../utils/MagneticHover";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-color-dark text-color-white h-fit w-screen px-6 pt-16  md:px-20 md:pt-20 lg:px-[150px] lg:pb-10 mt-20">
      <div className="flex flex-col gap-2 pb-6 border-b-borderLine border-b">
        <p className="text-work text-[12px]">SOCIAL</p>
        <ul className="flex gap-4">
          <MagneticHover>
            <a href="https://www.instagram.com/nihhzaeyy/" target="_blank">
              <li>Instagram</li>
            </a>
          </MagneticHover>
          <MagneticHover>
            <a
              href="https://www.linkedin.com/in/muchammad-nizar-almas-sukirno/"
              target="_blank"
            >
              <li>LinkedIn</li>
            </a>
          </MagneticHover>
          <MagneticHover>
            <li>Twitter</li>
          </MagneticHover>
        </ul>
      </div>
      <div className="py-6 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-work text-[12px]">VERSION</p>
          <p>2023 &#x24B8; Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-work text-[12px]">LOCAL TIME</p>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-work text-[12px]">LOCATION</p>
          <a href="https://maps.app.goo.gl/AxVoG5UmTgbp3zcy8" target="_blank">
            <p>Bursa, Türkiye</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
