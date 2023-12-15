import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#222222] h-fit w-screen px-6 pt-16 text-white md:px-20 md:pt-20 lg:px-[150px] lg:pb-10 mt-20">
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
