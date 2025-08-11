import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useTypewriter } from "react-simple-typewriter";
import { Navbar } from "./Navbar";
import image from "./Assests/img3.png";

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`group relative p-4 bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 ${hoverColor} z-20`}
  >
    <div className="text-white text-lg sm:text-xl">{icon}</div>
    <span className="sr-only">{label}</span>
  </a>
);

export const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const [typeEffect] = useTypewriter({
    words: [
      "Welcome To My Portfolio",
      "MERN Stack Developer",
      "DSA In C++",
      "PC gaming enthusiast",
      "Passionate Coder",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
  });

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col font-inter text-white">
      {/* Navbar */}
      <Navbar />
       <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
      {/* Main content container */}
      <main
        className="relative flex-grow flex items-center justify-center p-4 overflow-hidden"
        style={{ paddingTop: "80px" }} // Adjust this value to match your Navbar height
      >
        {/* Particle Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_60%)] animate-pulse" />
        </div>

        {/* Glow Orbs */}
        <div className="absolute w-80 h-80 bg-purple-500 rounded-full top-1/4 -left-32 opacity-20 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute w-1/3 h-1/3 bg-cyan-400 rounded-full bottom-1/4 -right-32 opacity-20 blur-3xl transform translate-y-1/2"></div>

        {/* Main Card */}
        <div
          data-aos="fade-up"
          className="relative bg-gray-900 border border-gray-700 hover:border-cyan-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 group p-8 sm:p-10 md:p-16 text-center max-w-lg sm:max-w-xl md:max-w-2xl w-full m-4 z-10 before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-cyan-400/50 before:animate-pulse before:pointer-events-none hover:animate-none md:hover:animate-float"
        >
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10"></div>

          {/* Floating Profile Image */}
          <div
            className="mb-8 relative group animate-float"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="relative mx-auto w-44 sm:w-56 md:w-64 aspect-square rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-cyan-400 transition-all duration-500">
              <img
                src={image}
                alt="Pawan Kumar profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name with Shine Effect */}
          <div className="mb-8 space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-shine">
              Pawan Kumar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-400 min-h-[32px] sm:min-h-[36px]">
              <span className="font-mono">{typeEffect}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <SocialIcon
              href="https://github.com/pawanx64"
              icon={<FaGithub />}
              label="GitHub profile"
              hoverColor="hover:shadow-[0_0_15px_#00ffff]"
            />
            <SocialIcon
              href="https://www.instagram.com/pawan.k02/"
              icon={<FaInstagram />}
              label="Instagram profile"
              hoverColor="hover:shadow-[0_0_15px_#ff00ff]"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/pawankumarnov5/"
              icon={<FaLinkedin />}
              label="LinkedIn profile"
              hoverColor="hover:shadow-[0_0_15px_#0077ff]"
            />
            <SocialIcon
              href="mailto:pawankumar.nov5@gmail.com"
              icon={<BiLogoGmail />}
              label="Email"
              hoverColor="hover:shadow-[0_0_15px_#ff3333]"
            />
            <SocialIcon
              href="https://discordapp.com/users/pawanx64"
              icon={<FaDiscord />}
              label="Discord profile"
              hoverColor="hover:shadow-[0_0_15px_#7289da]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// Custom Animations
const styles = `
.animate-float {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes textShine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.animate-text-shine {
  background-size: 200% auto;
  animation: textShine 3s linear infinite;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
