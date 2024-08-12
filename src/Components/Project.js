import React from "react";
import { Navbar } from "./Navbar";
import image4 from "./Assests/img6.jpg";
import { ProjectCard } from "./ProjectCard";
import image5 from "./Assests/img8.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Project = () => {


  AOS.init({
    easing:'ease-out-quart',
    delay:0,
    duration:750,
})
const defaultOptions = {
    reverse:        false, 
    max:            35,    
    perspective:    1000, 
    scale:          1.1,   
    speed:          2000,   
    transition:     true,   
    axis:           null,  
    reset:          true,  
    easing:         "cubic-bezier(0,0,0,0)",  
  }

  return (
    <div>
      <Navbar />
      <div className="body min-h-screen pt-10 sm:pt-0">
        <div data-aos="zoom-in" className="px-4 py-16 max-w-6xl mx-auto">
            <span className="flex flex-wrap text-center justify-center font-serif font-semibold text-white text-4xl">
              My Recent Project
            </span>
            <span className="flex flex-wrap text-center justify-center font-serif font-medium text-white text-xl">
              Here Are My Few Project I've Worked Recently
            </span>
        </div>
        <div data-aos="zoom-in">
          <div>
            <div className="flex justify-center gap-10 items-center flex-col lg:flex-row  mt-0">
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
              <div >
                <ProjectCard
                  imageSrc={image5}
                  heading="Peer Stream"
                  description="This real-time video chat application is developed using WebRTC, Socket.io, Node.js, Express.js, and React.js."
                  link1="https://github.com/pawanx64/PeerStream-Frontend"
                />

              </div>
              <div className="w-80 h-96 bg-white shadow-[0_0px_20px_-0px] hover:shadow-white rounded-lg overflow-hidden">
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
