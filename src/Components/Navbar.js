import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  // Mobile menu content
  const content = (
    <div className={`fixed top-0 left-0 w-full h-full bg-black transition-transform transform ${click ? 'translate-x-0' : '-translate-x-full'} z-50`}>
      <div className='flex flex-col items-center justify-center gap-6 h-full'>
        <Link to="/" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300" onClick={handleClick}>HOME</Link>
        <Link to="/About" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300" onClick={handleClick}>ABOUT</Link>
        <Link to="/Project" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300" onClick={handleClick}>PROJECT</Link>
        <Link to="/Contact" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300" onClick={handleClick}>CONTACT</Link>
        <Link to="/Admin" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300" onClick={handleClick}>ADMIN</Link>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <header className='flex justify-between items-center h-20 px-5 sm:px-10 bg-black bg-opacity-50 shadow-xl sticky top-0 z-40'>
        <h3 className='text-white font-serif text-xl font-semibold'>
          <Link to="/">
            Pawan Kumar
          </Link>
        </h3>
        <nav className='hidden md:flex gap-6 lg:gap-14'>
          <Link to="/" className='flex items-center gap-1 text-white'>
            <FaHome size={15} />
            <span className="nav-link">HOME</span>
          </Link>
          <Link to="/About" className='flex items-center gap-1 text-white'>
            <VscAccount size={15} />
            <span className="nav-link">ABOUT</span>
          </Link>
          <Link to="/Project" className='flex items-center gap-1 text-white'>
            <TbDeviceDesktopAnalytics size={15} />
            <span className="nav-link">PROJECT</span>
          </Link>
          <Link to="/Contact" className='flex items-center gap-1 text-white'>
            <GrContact size={15} />
            <span className="nav-link">CONTACT</span>
          </Link>
          <Link to="/Admin" className='flex items-center gap-1 text-white'>
            <RiAdminLine size={15} />
            <span className="nav-link">ADMIN</span>
          </Link>
        </nav>
        <button className='md:hidden text-white' onClick={handleClick}>
          {click ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </header>
      {content}
    </div>
  );
}
