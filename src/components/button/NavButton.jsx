import React from "react";
import { BiMenu } from "react-icons/bi";

const NavButton = () => {
  return (
    <>
      <button className="w-20 h-20 fixed z-10 bottom-5 lg:bottom-10 right-5 lg:right-10 bg-[#222222] rounded-full flex justify-center items-center border border-[#a6a6a6] hover:brightness-110">
        <BiMenu size={30} color="white" />
      </button>
    </>
  );
};

export default NavButton;
