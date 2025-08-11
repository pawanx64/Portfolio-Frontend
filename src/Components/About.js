import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBicycle,
  FaGamepad,
  FaPlane,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Navbar";
import image1 from "./Assests/img2.png";



export const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJs size={40} className="text-yellow-400" />,
    },
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-cyan-500" />,
    },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
    { name: "Vite", icon: <SiVite size={40} className="text-purple-400" /> },
  ];

  const hobbies = [
    { icon: <FaBicycle />, label: "Cycling" },
    { icon: <FaGamepad />, label: "Playing PC Games" },
    { icon: <FaPlane />, label: "Travelling" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-900 overflow-hidden font-inter">
      <Navbar />

      {/* Main About Section */}
       <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
      <section
        aria-label="About Pawan Kumar"
        data-aos="fade-up"
        className="relative max-w-5xl mx-auto bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-500 group p-8 md:p-12 text-white m-4"
        style={{ fontFeatureSettings: "'liga', 'kern'" }}
      >
        {/* Glow Overlay */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 relative drop-shadow-md">
          Know Who{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            I'M
          </span>
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"></span>
        </h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <article
            data-aos="fade-right"
            className="flex-1 lg:text-left text-center"
            aria-label="About text content"
          >
            <p className="text-lg mb-6 leading-relaxed drop-shadow-sm">
              Hello Everyone, I'm{" "}
              <span className="text-cyan-400 font-semibold">Pawan Kumar</span>{" "}
              from the{" "}
              <span className="text-cyan-400 font-semibold">
                vibrant city of Delhi!
              </span>
            </p>
            <p className="text-lg mb-6 leading-relaxed drop-shadow-sm">
              Currently pursuing B.Tech in{" "}
              <span className="text-cyan-400 font-semibold">
                Mathematics and Computing
              </span>{" "}
              at{" "}
              <span className="text-cyan-400 font-semibold">
                Delhi Technological University
              </span>
              . I've been learning and building projects using the{" "}
              <span className="text-cyan-400 font-semibold">MERN</span> stack.
            </p>
            <p className="text-lg mb-4 drop-shadow-sm">Beyond coding, I also enjoy:</p>

            <ul className="space-y-3 list-none p-0" aria-label="List of hobbies">
              {hobbies.map(({ icon, label }, idx) => (
                <li
                  key={label}
                  className="flex items-center justify-center lg:justify-start gap-3 text-lg cursor-default transition-colors duration-300 hover:text-cyan-400 focus:text-cyan-400 outline-none"
                  tabIndex={0}
                  aria-label={label}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-cyan-400">{icon}</span> {label}
                </li>
              ))}
            </ul>
          </article>

          {/* Right Image Card */}
          <Tilt
            {...defaultOptions}
            className="w-full lg:w-1/3 flex-shrink-0 group cursor-pointer rounded-3xl outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            tabIndex={0}
            aria-label="Portrait image of Pawan Kumar"
          >
            <div
              data-aos="fade-left"
              className="relative flex justify-center rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-500"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10"></div>
              <img
                src={image1}
                alt="Portrait of Pawan Kumar"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover select-none"
                draggable={false}
                loading="lazy"
              />
            </div>
          </Tilt>
        </div>
      </section>

      {/* Skills Section */}
      <section
        aria-label="Professional skills"
        className="container mx-auto px-4 py-20 font-inter"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative text-white drop-shadow-md">
          Professional{" "}
          <span className="text-cyan-400">Skills</span>
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-400 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative p-6 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 group flex flex-col items-center justify-center gap-3"
                tabIndex={0}
                aria-label={skill.name + " skill"}
                role="img"
                onKeyDown={(e) => {
                  // Optional: keyboard interaction for accessibility
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    alert(`You selected the ${skill.name} skill.`);
                  }
                }}
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10"></div>

                <div className="p-3 bg-gray-700 rounded-full">{skill.icon}</div>
                <span className="text-sm md:text-base font-semibold text-white mt-2 drop-shadow-sm">
                  {skill.name}
                </span>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
};
