import React from "react";
import MagneticHover from "../../utils/MagneticHover";

const Text = ({ archieved, project }) => {
  return (
    <div className="px-6 mt-6 lg:mt-16 sm:px-16 md:px-20 lg:px-[150px]">
      <h1 className="text-5xl xl:text-[60px]">
        Creating seamless, and impactful experiences.
      </h1>
      <div className="mt-10 text-xl gap-6 font-medium flex">
        <MagneticHover>
          <button
            onClick={project}
            className="px-10 py-5 rounded-[30px] border border-borderLine hover:bg-color-dark hover:text-color-white duration-300"
          >
            Projects
          </button>
        </MagneticHover>
        <MagneticHover>
          <button
            onClick={archieved}
            className="px-10 py-5 rounded-[30px] border border-borderLine hover:bg-color-dark hover:text-color-white duration-300"
          >
            Archive
          </button>
        </MagneticHover>
      </div>
    </div>
  );
};

export default Text;
