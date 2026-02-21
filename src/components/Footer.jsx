import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-6"
    >
      {/* Left Section */}
      <div>
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Right Section Links */}
      <ul className="text-sm md:text-lg space-y-3">
        
        
        {/* Email */}
        <li className="flex gap-2 items-center hover:text-red-300 transition">
          <MdOutlineEmail size={22} />
          <a href="maneeshama7@gmail.com">
            maneeshama7@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex gap-2 items-center hover:text-blue-300 transition">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/maneesha-ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/maneesha-ma
          </a>
        </li>

        {/* GitHub */}
        <li className="flex gap-2 items-center hover:text-gray-300 transition">
          <FaGithub size={22} />
          <a
            href="https://github.com/maneesha465"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/maneesha465
          </a>
        </li>

       

       

      </ul>
    </div>
  );
};

export default Footer;