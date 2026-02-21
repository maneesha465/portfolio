import React from "react";
import HomeImage from "../assets/HomeImage.png";


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="mt-6 pb-6 text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {/* <TextChange /> */} Hello I am Maneesha
        </h1>
        <p className=" mt-6 pb-6 text-sm md:text-2xl tracking-tight ">
        Aspiring Full-Stack Web Developer
        </p>
         <p className=" mt-6 pb-6 text-sm md:text-lg tracking-tight ">
        I’m a fresher passionate about building responsive and user-friendly web applications using modern web technologies. I enjoy learning new tools and creating real-world projects.

        </p>
       <button
  onClick={() => document.getElementById("Footer").scrollIntoView({ behavior: "smooth" })}
  className="mt-6 text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
>
  Contact Me
</button>
      </div>
       <div>
        <img className="" src={ HomeImage} alt="" />
      </div> 
    </div>
  );
};

export default Home;