import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";

export const ProjectCard = ({
  imageSrc,
  heading,
  description,
  link1,
  link2,
  demoLabel,
  
}) => {
  return (
    <div className="relative w-full sm:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] border border-gray-700 hover:border-cyan-400 transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-2 bg-slate-900 ">
      
      {/* Ambient Glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full pointer-events-none" />

      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          className="w-full h-48 sm:h-40 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
          src={imageSrc}
          alt={heading}
        />
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 sm:px-6 py-4 flex flex-col">
        <h3 className="font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {heading}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-4 pb-4">
        {link1 && (
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 rounded-full text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        )}
        {link2 && (
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-2 rounded-full text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            <PiCursorClickBold className="text-lg" />
            {demoLabel || "Demo"}
          </a>
        )}
      </div>

      {/* Glow Border Overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10"></div>
    </div>
  );
};
