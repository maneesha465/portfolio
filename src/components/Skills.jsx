import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiBootstrap, SiMongodb, SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-white bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg p-12 mt-10"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Skills</h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {/* HTML */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaHtml5 size={40} className="text-orange-500" />
          <p className="mt-2">HTML</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaCss3Alt size={40} className="text-blue-500" />
          <p className="mt-2">CSS</p>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <SiBootstrap size={40} className="text-purple-500" />
          <p className="mt-2">Bootstrap</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaJs size={40} className="text-yellow-400" />
          <p className="mt-2">JavaScript</p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaReact size={40} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaNodeJs size={40} className="text-green-500" />
          <p className="mt-2">Node.js</p>
        </div>

        {/* Express */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <SiExpress size={40} className="text-gray-300" />
          <p className="mt-2">Express.js</p>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <SiMongodb size={40} className="text-green-400" />
          <p className="mt-2">MongoDB</p>
        </div>

        {/* MySQL */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <SiMysql size={40} className="text-blue-300" />
          <p className="mt-2">MySQL</p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <FaGitAlt size={40} className="text-red-500" />
          <p className="mt-2">Git</p>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg hover:scale-105 transition">
          <SiTailwindcss size={40} className="text-cyan-300" />
          <p className="mt-2">Tailwind CSS</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;