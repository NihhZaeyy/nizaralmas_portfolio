import React from "react";
import { Link } from "react-router-dom";
import MagneticHover from "../../utils/MagneticHover";

const MoreWork = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <MagneticHover>
        <Link to="/project">
          <button className="border-button px-10 py-4 rounded-[40px] border font-medium hover:text-color-white hover:bg-color-dark duration-300">
            More Projects
          </button>
        </Link>
      </MagneticHover>
    </div>
  );
};

export default MoreWork;
