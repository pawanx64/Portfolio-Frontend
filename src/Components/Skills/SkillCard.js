import React from 'react'
export const SkillCard = ({heading,skills}) => {
  return (
    <div>
          <div className='border-2 border-red-950 rounded-xl bg-rose-950 w-96 h-96 '>
              <h6 className='font-mono text-lg font-semibold border-b-2  border-orange-600 pt-2 pb-2 pl-5 text-yellow-400'>{heading}</h6>
              
              <div className='font-mono text-lg font-semibold p-5 '>
                    {skills.map((item,index)=>(
                      <React.Fragment key={`skill_${index}`}>
                        <div className='flex pb-2 justify-between'>
                          <p className='flex'>
                                {item.skill}
                          </p>
                          <p  className='flex'>
                                {item.percentage}
                          </p>
                        </div>                        
                        <div className='pb-2'>
                            <div className='h-2 bg-white rounded-xl'>
                                <div style={{width: item.percentage}} className='h-2 bg-blue-900 rounded-xl transition-all ease-in-out overflow-hidden'></div>
                              </div>
                        </div>
                      
                      </React.Fragment>
                    ))}
              </div>
          </div>
    </div>
  )
}
