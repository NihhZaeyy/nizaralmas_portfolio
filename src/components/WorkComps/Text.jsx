import React from "react";

const Text = () => {
  return (
    <div className="px-6 mt-16 sm:px-16 md:px-20 lg:px-[150px]">
      <h1 className="text-5xl xl:text-[60px]">
        Creating seamless, and impactful experiences.
      </h1>
      <div className="mt-10 text-xl flex gap-6 font-medium">
        <button className="px-10 py-5 rounded-[30px] border border-[#a6a6a6] hover:bg-[#222222] hover:text-white duration-300">
          All
        </button>
        <button className="px-10 py-5 rounded-[30px] border border-[#a6a6a6] hover:bg-[#222222] hover:text-white duration-300">
          Archive
        </button>
      </div>
    </div>
  );
};

export default Text;