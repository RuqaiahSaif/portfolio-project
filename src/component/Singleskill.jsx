import React from 'react'
import '../style/skill.css'
function Singleskill({ imagsrc}){
  return (
    <div>
      <img src={imagsrc} className='skill h-20 w-32 font-Rampart' />
    </div>
  )
}

export default Singleskill
