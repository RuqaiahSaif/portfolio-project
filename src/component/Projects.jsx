import React from 'react'
import proImage from '../assets/images/478-computer-display-gradient-unscreen.gif'
import proImage1 from '../assets/images/1.png'
import proImage2 from '../assets/images/2.png'
import proImage3 from '../assets/images/3.png'
import proImage4 from '../assets/images/4.png'
import proImage5 from '../assets/images/5.png'
import proImage6 from '../assets/images/6.png'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Singleproject from './Singleproject'


function Projects({ projectImage, name, gitLink, proLink, tools }) {
    return (
        <div className=" bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')]  text-black dark:text-white h-auto font-Rampart" id='projects'>

            <div class="container mx-auto px-4 flex flex-wrap flex-col items-center justify-between ">

                <img src={proImage} class="sm:w-32 sm:h-32 h-28 w-28 " alt="" />
                <h2 className='text-primary-400 text-5xl' >Projects</h2>
            </div>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap -m-4 text-center">
                        <Singleproject
                            projectImage={proImage1}
                            name="Mad libs project"
                            gitLink="https://github.com/202212-GIZ-YE-FEW/mad-libs-codeforce"
                            proLink="https://202212-giz-ye-few.github.io/mad-libs-codeforce/"
                            tools={['html', 'css', 'js']}
                        />




                        <Singleproject
                            projectImage={proImage2}
                            name="Movie Project"
                            gitLink="https://github.com/202212-GIZ-YE-FEW/movie-project-parties-of-the-caribbean"
                            proLink="https://202212-giz-ye-few.github.io/movie-project-parties-of-the-caribbean/"
                            tools={['html', 'css', 'js']}
                        />




                        <Singleproject
                            projectImage={proImage3}
                            name="Mokha Merchent Project"
                            gitLink=""
                            proLink="https://mokhamerchant.com/en"
                            tools={['html', 'css', 'js', 'bootstrap', 'laravel']}
                        />

                        <Singleproject
                            projectImage={proImage4}
                            name="Hiring Project"
                            gitLink="https://github.com/RuqaiahSaif/jobs-project"
                            proLink="https://ruqaiahsaif.github.io/jobs-project"
                            tools={['html', 'css', 'js']}
                        />
                        <Singleproject
                            projectImage={proImage5}
                            name="library Project"
                            gitLink="https://github.com/RuqaiahSaif/lib-project"
                            proLink="https://ruqaiahsaif.github.io/lib-project"
                            tools={['html', 'css', 'js']}
                        />



                        <Singleproject
                            projectImage={proImage6}
                            name="Motah Project"
                            gitLink="https://github.com/RuqaiahSaif/Wakelny"
                            proLink=""
                            tools={['js', 'laravel', 'tailwind']}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects
