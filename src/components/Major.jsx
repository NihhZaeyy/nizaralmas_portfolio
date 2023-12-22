import React from "react";
import { HiOutlineArrowDownRight, HiArrowDownLeft } from "react-icons/hi2";

const Major = () => {
  return (
    <>
      <div className="flex flex-col pb-6 px-6 text-color-white font-medium w-screen mb-4 md:items-end lg:px-20 lg:pb-0 lg:mt-20 xl:px-[200px]">
        <div className="md:pr-[200px] lg:pr-[250px] ">
          <HiOutlineArrowDownRight size={50} />
        </div>
        <div className="mt-4 text-2xl lg:text-3xl">
          <h1>Freelance</h1>
          <h1>Web Developer</h1>
        </div>
      </div>
      <div className="text-color-white hidden lg:block px-6 py-6 text-xl font-medium xl:pl-[150px]">
        <div className="lg:pl-[180px]">
          <HiArrowDownLeft size={50} />
        </div>
        <div className="mt-4 text-2xl lg:text-3xl">
          <h1>Located in</h1>
          <h1>Türkiye</h1>
        </div>
      </div>
    </>
  );
};

export default Major;
