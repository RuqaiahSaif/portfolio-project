import React from 'react'
import '../style/cvbutton.css'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
const Cvbutton = () => {

    // Function will execute on click of button
    const onClick = () => {
        // using Java Script method to get PDF file
        fetch('CvRoqia.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = "https://drive.google.com/file/d/1eAR-MkIVwj5hf45-2aZTv8j0frlcKX30/view?usp=sharing";
                alink.download = 'CvRoqia.pdf';
                alink.click();
            })
        })
    }
  return (
    <div>
          <nav className=" cv fixed top-80 right-5 font-Rampart">
              <ul className='p-0'>
               
                  <li onClick={onClick}  ><FontAwesomeIcon 
                      className='mx-2 rounded-full p-1 w-5 h-5 bg-white text-black hover:transition-all ' icon={faArrowDown} /><p className='inline p-1 text-sm text-bold'>download Cv</p></li>
              </ul>
          </nav>
    </div>
  )
}

export default Cvbutton
