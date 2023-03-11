import React from 'react'
import Typical from 'react-typical'
import image from '../assets/images/undraw_programmer_re_owql.svg'
function Hiro() {
    return (

        <div className="bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')] text-black dark:text-white h-1/2  py-20 flex font-Rampart">

            <div class="container  px-4 grid md:grid-cols-2 md:gap-56 sm:grid-cols-1 sm:gap-10  ">

                <div class=" container flex flex-wrap flex-col items-center">

                    <span className="animate-waving-hand text-5xl p-7">👋🏻</span>

                    <span className='md:text-5xl p-7 sm:text-2xl font-Rampart' >I'm Ruqaiah Saif</span>

                    <strong className="text-primary-400 p-2 md:text-2xl sm:text-xl">
                        <Typical
                            steps={[ ' Full Stack Devloper', 3000]}
                            wrapper="p"
                            loop={Infinity}

                        />
                    </strong>
                    <span className='md:text-xl p-7 sm:text-2xl' >"Strive to build things that make a difference!"</span>
                </div>

                <img src={image} className='h-80 w-80  mt-10' />
            </div>
        </div>


    )
}

export default Hiro
