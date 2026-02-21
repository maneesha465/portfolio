import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          {/* <img className="md:h-80" src={AboutImg} alt="About img" /> */}

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                {/* <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1> */}
                <p className="text-sm md:text-md leading-tight">
                 An aspiring Full-Stack Web Developer and fresher passionate about building responsive, user-friendly web applications using the MERN stack and continuously learning new technologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                {/* <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1> */}
                <p className="text-sm md:text-md leading-tight">
                  Hands-on experience with HTML, CSS, Bootstrap, JavaScript, React, Node.js, and MongoDB through personal and academic projects, and I am interested in working on both frontend and backend development.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                {/* <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1> */}
                <p className="text-sm md:text-md leading-tight">
                  I enjoy learning new technologies, solving problems, and creating real-world applications. I am actively seeking entry-level opportunities where I can apply my skills, learn from experienced developers, and grow in my career.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;