import React from "react";
import { Navbar } from "./Navbar";
import image4 from "./Assests/img6.jpg";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="body h-full">
        <div data-aos="zoom-in" className="pl-10 pr-10">
            <span className="flex flex-wrap text-center justify-center pt-16 font-serif font-semibold text-white text-4xl">
              My Recent Project
            </span>
            <span className="flex flex-wrap text-center justify-center pt-4 font-serif font-medium text-white text-xl">
              Here Are My Few Project I've Worked Recently
            </span>
        </div>
        <div data-aos="zoom-in">
          <div>
            <div className="flex justify-center gap-10 items-center flex-col lg:flex-row h-screen mt-0">
              <div >
                <ProjectCard
                  imageSrc={image4}
                  heading="SkyBox Share"
                  description="Skybox is a dynamic image and video sharing platform built
                  entirely with the MERN stack (MongoDB, Express.js, React.js,
                  Node.js)."
                  link1="https://github.com/pawanx64/File-Sharing-Frontend"
                  link2="https://skyboxshare.vercel.app/"
                />

              </div>
              <div className="bg-white shadow-[0_0px_20px_-0px] hover:shadow-white rounded-lg overflow-hidden">
                  <div className="flex justify-center items-center h-[344px] w-80 px-6 py-4">
                  <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
                    <p className="text-gray-700 text-base">Stay tuned for our next exciting project!</p>
                  </div>
                </div>
              </div>
            </div>
            
        
            
          </div>
        </div>
      </div>
    </div>
  );
};
