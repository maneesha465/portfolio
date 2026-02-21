
import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex justify-center flex-wrap gap-5">
        <ProjectCard
          title="Car-Rental Website"
          main="A responsive MERN stack car rental web application with vehicle listings, booking management, secure authentication, admin dashboard, and integrated online payment system."
          demoLink="https://frontend-car-rental-vert.vercel.app"
          frontendLink="https://github.com/maneesha465/FRONTEND-CAR-RENTAL"
          backendLink="https://github.com/maneesha465/BACKEND-CAR-RENTAL"
        />
        <ProjectCard
          title="Expense Tracker"
          main="A responsive expense tracker application that allows users to add, edit, and delete expenses, track income and spending, and view total balance."
        demoLink="https://expensetracker-fe-k3lf.onrender.com"
          frontendLink="https://github.com/maneesha465/ExpenseTracker-FE"
          backendLink="https://github.com/maneesha465/ExpenseTracker-BE"
        />
        {/* <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;