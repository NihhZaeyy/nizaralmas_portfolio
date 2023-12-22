import React from "react";

const About = () => {
  return (
    <div className="h-fit w-screen py-16 md:py-[150px] text-color-dark">
      <div className="flex px-6 gap-8 flex-col justify-between items-start md:px-20 md:flex-row lg:px-[150px] xl:pr-[200px]">
        <h2 className="text-xl leading-relaxed md:pr-10 xl:pr-[150px] xl:text-2xl">
          Loves turning designers' visions into vibrant digital spaces.
          Collaborating closely with creatives, bringing concepts to life with
          sleek, functional websites. Let's team up to make your design dreams a
          captivating digital reality!
        </h2>
        <h3 className="text-sm md:leading-relaxed md:text-base xl:text-[18px]">
          I specialize in coding and user experience, ensuring our websites not
          only look stunning but work flawlessly.
        </h3>
      </div>
    </div>
  );
};

export default About;
