import React from "react";
import { HiArrowDownLeft } from "react-icons/hi2";
import avatar from "/src/assets/avatar.png";

const Text = () => {
  return (
    <div className="px-6 mt-6 lg:mt-16 sm:px-16 md:px-20 lg:px-[150px]">
      <h1 className="text-5xl xl:text-[60px]">
        Let's bring your dream website to life!
      </h1>
      <div className="mt-16 flex justify-between">
        <img src={avatar} alt="" />
        <HiArrowDownLeft size={70} />
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#a6a6a6]"></div>
          <p className="font-medium">CONTACT DETAILS</p>
        </div>
        <div className="flex flex-col text-center md:flex-row gap-4 font-medium text-xl">
          <div className="px-6 py-2 border border-[#222222] rounded-3xl hover:bg-[#222222] hover:text-white duration-300 cursor-pointer">
            nizaralmas01@gmail.com
          </div>
          <div className="px-6 py-2 border border-[#222222] rounded-3xl hover:bg-[#222222] hover:text-white duration-300 cursor-pointer">
            +90 552 511 98 52
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
