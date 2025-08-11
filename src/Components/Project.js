import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard";
import image4 from "./Assests/img6.jpg";
import image5 from "./Assests/img8.png";
import image6 from "./Assests/image6.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Project = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900  min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Glowing Background Effects */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/40 rounded-full blur-3xl animate-pulse" />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div
          data-aos="zoom-in"
          className="max-w-6xl mx-auto text-center mb-20 sm:mb-24 px-4 sm:px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x leading-tight">
            My Recent Projects
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are a few projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          <ProjectCard
            imageSrc={image4}
            heading="SkyBox Share"
            description="Skybox is a dynamic image and video sharing platform built entirely with the MERN stack (MongoDB, Express.js, React.js, Node.js)."
            link1="https://github.com/pawanx64/File-Sharing-Frontend"
            link2="https://skyboxshare.vercel.app/"
            
          />

          <ProjectCard
            imageSrc={image5}
            heading="Peer Stream"
            description="This real-time video chat application is developed using WebRTC, Socket.io, Node.js, Express.js, and React.js."
            link1="https://github.com/pawanx64/PeerStream-Frontend"
            link2="https://drive.google.com/file/d/1wkBO2es2QNHEKfxIEdDP-yRSsChV2qBZ/view?usp=sharing"
            demoLabel="Video Demo"
          />

          <ProjectCard
            imageSrc={image6}
            heading="Resume Checker"
            description="A user-friendly Resume Checker web app that helps job seekers improve their resumes by matching them with job descriptions."
            link1="https://github.com/pawanx64/Resume-Checker-Frontend"
            link2="https://resume-checker-frontend-puce.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};
