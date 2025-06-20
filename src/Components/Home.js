import React from 'react';
import image from './Assests/img5.jpg';
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram,FaLinkedin,FaDownload,FaDiscord} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineCall } from "react-icons/md";
import { useTypewriter} from 'react-simple-typewriter';
import { Navbar } from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {

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

  const[typeEffect]=useTypewriter({
    words:['Welcome To My Portfolio','MERN Stack Developer','DSA In C++','Like To Play PC Games'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50,
  })
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col overflow-x-hidden">      
        <Navbar/>
        <div data-aos="zoom-in" className='h-screen flex justify-evenly items-center sm:mt-36 md:mt-0   mb-36 sm:mb-0  pl-5 pr-5 flex-col lg:flex-row '>
                        <div>
                            <img src={image}  alt="logo" className='rounded-3xl w-72 h-72'/>
                        </div>
                        <div  className='gap-0 sm:gap-6 lg:gap-1 grid grid-rows-3'>
                            <div className='flex justify-center pt-2 lg:pt-0 items-center lg:justify-start'>
                                <span className='flex flex-wrap text-center text-[28px] lg:text-[48px] font-serif font-semibold text-yellow-200 justify-center items-center flex-col lg:flex-row'>Hello I'm Pawan </span>
                            </div>
                            <div className='flex flex-wrap justify-center font-serif items-center lg:justify-start'>
                                <span className='text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-center font-semibold text-orange-400 '>{typeEffect}</span>
                            </div>
                            <div className='flex flex-wrap  gap-6 justify-center items-center pt-8 pb-8 lg:pb-0 sm:pt-0 lg:justify-start'>
                                  <a href='https://drive.google.com/file/d/1p-_sXEWbYJpwG6IbEwJeI1pIiWLwgZCf/view?usp=drive_link'  target='_blank' rel='noopener noreferrer'>
                                        <button className='flex items-center gap-2 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 hover:scale-105 transform transition-all duration-300 text-white font-bold py-2 px-6 border border-transparent rounded-full shadow-lg hover:shadow-orange-600/50'>
                                          <h1 className='text-xl font-serif text-white'>Resume</h1>
                                          <FaDownload size={17}className='mt-1 text-white'/>
                                        </button>
                                  </a>
                                  <a href='mailto:pawankumar.nov5@gmail.com'  target='_blank' rel='noopener noreferrer'>
                                          <button className='flex items-center gap-2 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 hover:scale-105 transform transition-all duration-300 text-white font-bold py-2 px-6 border border-transparent rounded-full shadow-lg hover:shadow-orange-600/50'>
                                              <h1 className='text-xl font-serif text-white'>Contact</h1>
                                              <MdOutlineCall size={17}className='mt-1 text-white'/>
                                          </button>
                                  </a> 
                            </div>
                            <div className='flex flex-wrap gap-4 sm:gap-8 justify-center lg:justify-start  '>
                                <a href='https://github.com/pawanx64' target='_blank' rel='noopener noreferrer'>
                                    <IoLogoGithub size={45} className='text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:shadow-[0_0px_10px_-0px] hover:scale-105 transform transition-all duration-300 rounded-2xl p-1.5' />
                                </a>
                                <a href='https://www.instagram.com/pawan.k02/' target='_blank' rel='noopener noreferrer'>
                                  <FaInstagram size={45} className='text-white bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 hover:shadow-[0_0px_10px_-0px] hover:scale-105 transform transition-all duration-300 rounded-2xl p-1.5'/>
                                </a>
                                <a href='https://www.linkedin.com/in/pawankumarnov5/' target='_blank' rel='noopener noreferrer'>
                                  <FaLinkedin size={45} className='text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:shadow-[0_0px_10px_-0px] hover:scale-105 transform transition-all duration-300 rounded-2xl p-1.5'/>
                                </a>
                                <a href='mailto:pawankumar.nov5@gmail.com' target='_blank' rel='noopener noreferrer'>
                                  <BiLogoGmail size={45} className='text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:shadow-[0_0px_10px_-0px] hover:scale-105 transform transition-all duration-300 rounded-2xl p-1.5'/>
                                </a>
                                <a href='https://discordapp.com/users/pawanx64' target='_blank' rel='noopener noreferrer'>
                                  <FaDiscord size={45} className='text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:shadow-[0_0px_10px_-0px] hover:scale-105 transform transition-all duration-300 rounded-2xl p-1.5'/>
                                </a>
                            </div>    
                        </div>        
        </div>
    </div>
  )
}
