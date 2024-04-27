import React from 'react'
export const Card = ({title,isActive,onClick}) => {
  
  return (
    <div >
          <div className={`skills-card ${isActive ? "active" : ""}`}
              onClick={()=>onClick()}
          >
              <span className='text-white font-serif text-xl font-semibold '>{title}</span>
        </div>
    </div>
  )
}
