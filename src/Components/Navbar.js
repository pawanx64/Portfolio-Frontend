import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';
import {Link } from 'react-router-dom';
import { RiAdminLine } from "react-icons/ri";

export const Navbar = () => {
  
  
  const [click,setClick]=useState(false);
  const handleClick=()=>{
         setClick(!click);
  }
  
  
  
  //heinberg content
  const content=<>
      <div className='lg:hidden flex-wrap absolute top-20  left-0 right-0  transition'>
                <div className='flex justify-evenly items-center flex-col  gap-4 h-screen bg-black '>
                        <Link to="/">
                              <div className="nav-mob-link">HOME</div>
                        </Link>
                        <Link to="/About">
                              <div className="nav-mob-link">ABOUT</div>
                        </Link>      
                        <Link to="/Project">
                              <div className="nav-mob-link">PROJECT</div>
                        </Link> 
                        <Link to="/Contact">
                              <div className="nav-mob-link">CONTACT</div>
                        </Link>     
                        <Link to="/Admin">
                              <div className="nav-mob-link">ADMIN</div>
                        </Link> 
                </div>  
      </div>
  </>
  return (
    <div>
        <header className=' flex bg-opacity-50 w-full h-20  justify-between sticky z-[10000] items-center flex-wrap pl-5 sm:pl-10 pr-5 sm:pr-10  bg-black shadow-2xl shadow-black '>
                <h3 className='flex flex-wrap font-semibold text-white font-serif text-xl'>
                        <Link to="/">
                              Pawan Kumar
                        </Link>
                </h3>
                <nav className='hidden  md:flex gap-6 lg:gap-14'>
                        <Link to="/"  className='flex gap-0.5 justify-between items-center'>
                              <FaHome size={15} className='text-white '/>
                              <div className="nav-link">HOME</div>
                        </Link >
                        <Link to="/About"  className='flex gap-0.5 justify-between items-center'>
                              <VscAccount size={15} className='text-white '/>
                              <div className="nav-link">ABOUT</div>
                        </Link>      
                        <Link to="/Project"  className='flex gap-0.5 justify-between items-center'>
                              <TbDeviceDesktopAnalytics size={15} className='text-white ' />
                              <div className="nav-link">PROJECT</div>
                        </Link> 
                        <Link to="/Contact"  className='flex gap-0.5 justify-between items-center'>
                              <GrContact size={15} className='text-white '/>
                              <div className="nav-link">CONTACT</div>
                        </Link>
                        <Link to="/Admin"  className='flex gap-0.5 justify-between items-center'>
                              <RiAdminLine size={15} className='text-white '/>
                              <div className="nav-link">ADMIN</div>
                        </Link>  

                </nav>  
                {click && content}
                <button className='md:hidden  flex justify-around items-center text-white' onClick={handleClick}>
                    {click ? <FaTimes size={25}/>  : <FaBars size={25}/>}
                </button>        
        </header>
    </div>
  )
}
