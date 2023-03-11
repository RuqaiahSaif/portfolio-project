import React from 'react'
import image from '../assets/images/268-avatar-man-gradient.gif';
import skillImage from '../assets/images/undraw_voice_interface_re_206s.svg';
import bootstrapImage from '../assets/images/Bootstrap_logo.svg'
import htmlImage from '../assets/images/HTML5_logo_and_wordmark.svg'
import cssImage from '../assets/images/iconcss3.svg'
import taikwindImage from '../assets/images/Tailwind_CSS_Logo.svg'

// import tailwindImage from '../assets/images/Tailwind_CSS_Logo.svg'
// import tailwinddImage from '../assets/images/Bootstrap_logo.svg'
// import nodeImage from '../assets/images/'
import laravelImage from '../assets/images/Laravel.svg'
import reactImage from '../assets/images/React-icon.svg'
import Singleskill from './Singleskill';
function Skills({ imagsrc }) {
  return (
    <div className=" bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')]  text-black dark:text-white h-auto font-Rampart" id="skills"> 

      <div class="container mx-auto px-4 flex flex-wrap flex-col items-center justify-between ">

        <img src={image} class="sm:w-32 sm:h-32 h-28 w-28 " alt="" />
        <h2 className='text-primary-400 text-5xl font-Rampart' >Skills</h2>
      </div>
      <div class="container mx-auto px-10">
        <div className=' grid md:grid-cols-2 md:gap-40 sm:grid-cols-1 sm:gap-10'>
          
          <img src={skillImage} alt="" className='h-96 w-96' />
          <div className='py-20'>
          <p>My name is Ruqaiah Saif, I'm a Full stack developer with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer.</p>
            <p className='pt-10 font-bold text-primary-400'>my main technical skills:</p>
          <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6 p-5">
             
            <Singleskill imagsrc={htmlImage} />
            <Singleskill imagsrc={cssImage} />
              <Singleskill imagsrc={bootstrapImage} />
              <Singleskill imagsrc={taikwindImage} />
            <Singleskill imagsrc={reactImage} />
            <Singleskill imagsrc={laravelImage} />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
