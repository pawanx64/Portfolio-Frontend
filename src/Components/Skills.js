import React, { useState } from 'react'
import { SkillCard } from './Skills/SkillCard';
import {Card} from './Skills/Card';
import { SKILLS } from '../Utilis/data';


export const Skills = () => {
  
  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);
  const handleSelectedSkill=(data)=>{
        setSelectedSkill(data);
  };
  return (
    <div>
        <div >
            <h1 className='flex flex-wrap text-[30px] sm:text-5xl justify-center  text-center font-serif font-bold from-blue-100 via-purple-600 to-purple-950 bg-gradient-to-l bg-clip-text text-transparent'>Technical Proficieny</h1>
        </div>
        <div className='pl-10 pr-10 pt-28 pb-28'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 lg:justify-around '>
                <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 h-fit w-fit items-center gap-8'>
                    {SKILLS.map((item)=>(
                        <Card
                            key={item.title}
                            title={item.title}
                            isActive={selectedSkill.title===item.title}
                            onClick={()=>{
                                handleSelectedSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className='text-white flex flex-wrap'>
                    <SkillCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
