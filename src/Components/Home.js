import React from 'react';
import image from './Assests/img5.jpg';
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram,FaLinkedin,FaDownload} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineCall } from "react-icons/md";
import { useTypewriter} from 'react-simple-typewriter';
import { Navbar } from './Navbar';



export const Home = () => {
  const[typeEffect]=useTypewriter({
    words:['Welcome To My Portfolio','MERN Stack Developer','DSA In C++','Like To Play PC Games'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50,
  })
  return (
    <div >      
        <Navbar/>
        <div className='body h-screen flex justify-evenly items-center mt-36 sm:mt-0  mb-36 sm:mb-0 pt-10 pb-10 pl-5 pr-5 flex-col lg:flex-row  '>
                  
                        <div>
                            <img src={image}  alt="logo" className='rounded-3xl w-72 h-72'/>
                        </div>
                        <div  className='gap-0 sm:gap-6 lg:gap-1 grid grid-rows-3'>
                            <div className='flex justify-center pt-2 lg:pt-0 items-center lg:justify-start'>
                                <span className='flex flex-wrap text-center text-[28px] lg:text-[48px] font-serif font-semibold text-yellow-200 justify-center items-center flex-col lg:flex-row'>Hello I'm Pawan </span>
                            </div>
                            <div className='flex flex-wrap justify-center font-serif items-center lg:justify-start'>
                                <span className='text-[20px] sm:text-[28px] text-center font-semibold text-orange-400 flex-col lg:flex-row'>{typeEffect}</span>
                            </div>
                            <div className='flex flex-wrap  gap-6 justify-center items-center pt-8 pb-8 lg:pb-0 sm:pt-0 lg:justify-start'>
                                  <a href='https://github.com/pawan511coder'>
                                        <button className='flex gap-2  hover:bg-gradient-to-r from-orange-600 via-pink-600 to-red-600  text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                                          <h1 className='text-xl font-serif text-white'>Resume</h1>
                                          <FaDownload size={17}className='mt-1 text-white'/>
                                        </button>
                                  </a>
                                  <a href='mailto:pawankumar.nov5@gmail.com'>
                                          <button className='flex gap-2 hover:bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                                              <h1 className='text-xl font-serif text-white'>Contact</h1>
                                              <MdOutlineCall size={17}className='mt-1 text-white'/>
                                          </button>
                                  </a> 
                            </div>
                            <div className='flex flex-wrap gap-4 sm:gap-8 justify-center lg:justify-start'>
                                <a href='https://github.com/pawanx64' target='_blank'>
                                    <IoLogoGithub size={45} className='text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950 hover:shadow-[0_0px_10px_-0px] rounded-2xl p-1 ' />
                                </a>
                                <a href='https://github.com/pawan511coder' target='_blank'>
                                  <FaInstagram size={45} className='text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950 hover:shadow-[0_0px_10px_-0px] rounded-2xl p-1 '/>
                                </a>
                                <a href='https://www.linkedin.com/in/pawankumarnov5/' target='_blank'>
                                  <FaLinkedin size={45} className='text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950 hover:shadow-[0_0px_10px_-0px] rounded-2xl p-1.5 '/>
                                </a>
                                <a href='mailto:pawankumar.nov5@gmail.com' target='_blank'>
                                  <BiLogoGmail size={45} className='text-white hover:bg-gradient-to-r from-blue-950 via-pink-950 to-purple-950 hover:shadow-[0_0px_10px_-0px] rounded-2xl p-1 '/>
                                </a>
                            </div>    
                        </div>        
        </div>
    </div>
  )
}
