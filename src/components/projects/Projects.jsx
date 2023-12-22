import React from "react";
import { Link } from "react-router-dom";
import projectData from "../../data/worksData.json";

const Projects = ({ limit }) => {
  const renderedProject = limit ? projectData.slice(0, limit) : projectData; //slicing data with setting limit from parent
  return (
    <section className="px-6 w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 h-fit md:px-6 md:gap-10 lg:px-10">
        {renderedProject.map((data) => (
          <div className="flex flex-col" key={data.id}>
            <div className="px-6 py-16 bg-work mb-6">
              <img src={data.url} alt={data.name} />
            </div>
            <div className="border-b border-b-borderLine pb-3">
              <h1 className="text-3xl font-medium text-color-dark">
                {data.name}
              </h1>
            </div>
            <div className="pt-3 text-sm flex justify-between">
              <h4>{data.service}</h4>
              <p>{data.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Projects;
