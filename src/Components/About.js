import React from 'react'
import image1  from './Assests/img2.png';
import { LiaHandPointRightSolid } from "react-icons/lia";
import { Tilt } from 'react-tilt';
import { Navbar } from './Navbar';
import { Skills } from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
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
  return (
    <div>
        <Navbar/>
        <div className='body overflow-x-hidden h-fit mt-20 mb-20 '>
            <div data-aos="fade-down" className='pb-28'>
                    <span className='flex flex-wrap text-[30px] sm:text-5xl justify-center  text-center font-serif font-bold from-blue-100 via-purple-600 to-purple-950 bg-gradient-to-l bg-clip-text text-transparent'>
                        Know Who I'M
                    </span>
            </div>
            <div  className='flex mb-10 flex-wrap justify-center lg:justify-evenly flex-col-reverse lg:flex-row'>
                  <div data-aos="fade-right">
                        <span className='flex flex-col gap-6 justify-center items-center'> 
                            <ul className='text-[16px] font-serif font-semibold from-white via-purple-100 to-white bg-gradient-to-r bg-clip-text text-transparent '>
                                <li className='pb-2'>
                                    Hello Everyone, I'm <span className='text-sky-600'>Pawan Kumar</span> from the <span className='text-sky-600'>vibrant city of Delhi!</span>
                                </li>
                                <li className='pb-2'>
                                    Currently pursuing B.Tech in <span className='text-yellow-400'>Mathematics and Computing</span> at <span className='text-yellow-400'>Delhi Technological University</span>.
                                </li>
                                <li className='pb-4'> 
                                    Learned <span className='text-blue-700'>MERN</span> Web Development!
                                </li>
                                <li className='pb-2'>
                                    Beyond coding, Some other activities that I love to do!
                                </li>
                                <li className='flex gap-4 pb-1'>
                                    <LiaHandPointRightSolid size={30} className='text-white'/>
                                    Cycling
                                </li>
                                <li className='flex gap-4 pb-1'>
                                    <LiaHandPointRightSolid size={30} className='text-white'/>
                                    Playing PC Games
                                </li>
                                <li className='flex gap-4'>
                                    <LiaHandPointRightSolid size={30} className='text-white'/>
                                    Travelling
                                </li>
                            </ul>
                        </span>   
                  </div>

                  <Tilt options={defaultOptions}>
                        <div data-aos="fade-left" className='flex justify-center pb-14 lg:pb-0 cursor-pointer '>
                            <img  src={ image1 } alt="logo" className='rounded-3xl w-64 h-64  hover:shadow-white shadow-[0_0px_20px_-0px]'/>
                        </div>   
                  </Tilt>

            </div>
        </div>
        <Skills/>
    </div>
  )
}
