import React from "react";
//import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main, demoLink, frontendLink, backendLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 md:w-96 lg:w-[420px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* <img className="p-4" src={bannerImg} alt="" /> */}
      <h3 className="px-4 mt-6 mb-6 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
        </p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
        </a>

        {/* Source Code Button */}
         <div className="relative group">
          <button className="bg-[#465697] px-4 py-2 rounded-3xl hover:scale-105 duration-300">
            Source Code
          </button>

          {/* Popup Menu */}
          <div className="absolute hidden group-hover:flex flex-col bg-[#111327] shadow-lg rounded-lg mt-2 p-2 w-40 z-50">
            <a
              href={frontendLink}
              target="_blank"
              className="px-3 py-2 hover:bg-[#465697] rounded-md text-sm"
            >
              Frontend
            </a>
            <a
              href={backendLink}
              target="_blank"
              className="px-3 py-2 hover:bg-[#465697] rounded-md text-sm"
            >
              Backend
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;