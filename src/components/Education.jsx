import React from "react";

const Education = () => {
  return (
    <div
    id="Education"
    className="pt-5 md:pt-10 px-10 md:px-24 text-white">

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold">
        Education & Certification
      </h1>

      {/* Timeline */}
      <div className="mt-14 relative border-l-2 border-[#465697] ml-6">

        {/* BCA */}
        <div className="relative mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-[#465697] rounded-full -left-8 top-2"></div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-200">
              BCA - Computer Applications
            </h3>
            <p className="text-gray-300">CCST College | 2017 - 2020</p>
            <p className="text-sm text-gray-300 mt-2">Calicut University</p>
          </div>
        </div>

        {/* MSc */}
        <div className="relative mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-[#465697] rounded-full -left-8 top-2"></div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-200">
              MSc Computer Science
            </h3>
            <p className="text-gray-300">VTB College | 2021 - 2023</p>
            <p className="text-sm text-gray-300 mt-2">Calicut University</p>
          </div>
        </div>

        {/* Certification */}
        <div className="relative mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-8 top-2"></div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-200">
              Full Stack Web Development (MERN)
            </h3>
            <p className="text-gray-300">Entri Elevate | 2025</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;