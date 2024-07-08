import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";

export const ProjectCard = ({
  imageSrc,
  heading,
  description,
  link1,
  link2,
}) => {
  return (
    <div>
      <div className="max-w-xs  w-80 h-96 bg-white  shadow-[0_0px_20px_-0px] hover:shadow-white rounded-lg overflow-hidden">
        <img className="w-full h-40 object-cover" src={imageSrc} alt="Card" />
        <div className="px-6 py-4 h-40 ">
          <div className="font-bold text-xl text-orange-950 mb-2">
            {heading}
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-evenly items-center space-x-4 pb-3">
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <FaGithub />
            GitHub
          </a>
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <PiCursorClickBold />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
