import React from "react";
import nothing from "/src/assets/questioning.png";

const Archieved = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 w-screen gap-4 mt-16">
      <img src={nothing} alt="" />
      <h1 className="text-color-dark text-lg font-medium sm:text-xl lg:text-2xl">
        There are no archive projects here
      </h1>
    </div>
  );
};

export default Archieved;
