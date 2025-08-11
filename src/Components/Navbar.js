import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { useTypewriter } from 'react-simple-typewriter';

// This is the redesigned Navbar component using react-router-dom
export const Navbar = () => {
  // State to manage the open/close status of the mobile menu
  const [open, setOpen] = useState(false);

  // Toggles the mobile menu state
  const handleToggle = () => setOpen(!open);
  
  // Closes the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Array of navigation links with their paths
  const navLinks = [
    { label: "Home", path: "/", icon: <FaHome size={18} /> },
    { label: "About", path: "/About", icon: <FaUser size={18} /> },
    { label: "Projects", path: "/Project", icon: <FaProjectDiagram size={18} /> },
    { label: "Contact", path: "/Contact", icon: <FaEnvelope size={18} /> },
    { label: "Admin", path: "/Admin", icon: <FaShieldAlt size={18} /> },
  ];

  return (
    // Header with fixed position, full width, and high z-index to stay on top
    <header className="fixed top-0 left-0 w-full z-50 font-inter">
      {/* Navbar container with a dark glassmorphism effect */}
      <div className="flex justify-between items-center h-20 px-6 lg:px-12 bg-gray-900/50 backdrop-blur-md shadow-xl border-b border-gray-700">
        
        {/* Brand/Logo Link */}
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide transition-colors duration-300 hover:text-cyan-400"
          onClick={handleLinkClick}
        >
          Pawan Kumar
        </Link>

        {/* Desktop Menu - visible on screens larger than 'md' */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path, icon }) => (
            <Link
              key={label}
              to={path}
              onClick={handleLinkClick}
              className="flex items-center gap-2 font-medium relative group text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {icon}
              <span className="text-sm">{label}</span>
              {/* Animated underline effect */}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle button - visible on screens smaller than 'md' */}
        <button
          className="md:hidden text-white focus:outline-none z-50 transition-transform duration-300 hover:scale-110"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
        >
          {/* Icon changes based on menu state */}
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950/90 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button for the mobile menu */}
        <button
          className="absolute top-6 right-6 text-white transition-transform duration-300 hover:scale-110 focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        >
          <FaTimes size={32} />
        </button>
        
        {/* Mobile Navigation Links */}
        {navLinks.map(({ label, path, icon }) => (
          <Link
            key={label}
            to={path}
            className="flex items-center gap-4 text-3xl font-light text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};