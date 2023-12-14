import React from "react";
import { Link } from "react-router-dom";

const MoreWork = () => {
  return (
    <div className="flex justify-center items-center">
      <Link to="/work">
        <button className="border-[#a6a6a6] px-10 py-4 rounded-[40px] border font-medium hover:text-white hover:bg-[#222222] duration-300">
          More work
        </button>
      </Link>
    </div>
  );
};

export default MoreWork;
