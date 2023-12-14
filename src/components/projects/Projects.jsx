import React from "react";
import wonderfulJogja from "/src/assets/project-wonderful-jogja.png";
import mizukiSushi from "/src/assets/project-mizuki-sushi.png";
import caseSepeti from "/src/assets/project-casesepeti.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="px-6 w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 h-fit md:px-6 md:gap-10 lg:px-10">
        <div className="flex flex-col">
          <div className="px-6 py-16 bg-[#C0C0C0] mb-6">
            <img src={wonderfulJogja} alt="wonderfuljogja" />
          </div>
          <div className="border-b border-b-[#a6a6a6] pb-3">
            <h1 className="text-3xl font-medium text-[#222222]">
              Wonderful Jogja
            </h1>
          </div>
          <div className="pt-3 text-sm flex justify-between">
            <h4>Design & Development</h4>
            <p>2023</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-6 py-16 bg-[#C0C0C0] mb-6">
            <img src={caseSepeti} alt="caseSepeti" />
          </div>
          <div className="border-b border-b-[#a6a6a6] pb-3">
            <h1 className="text-3xl font-medium text-[#222222]">Case Sepeti</h1>
          </div>
          <div className="pt-3 text-sm flex justify-between">
            <h4>Design & Development</h4>
            <p>2023</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-6 py-16 bg-[#C0C0C0] mb-6">
            <img src={mizukiSushi} alt="mizukiSushi" />
          </div>
          <div className="border-b border-b-[#a6a6a6] pb-3">
            <h1 className="text-3xl font-medium text-[#222222]">
              Mizuki Sushi
            </h1>
          </div>
          <div className="pt-3 text-sm flex justify-between">
            <h4>Design & Development</h4>
            <p>2023</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
