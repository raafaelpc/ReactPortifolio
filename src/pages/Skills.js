import React from 'react'
import {AiFillHtml5} from "react-icons/ai"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {SiStyledcomponents} from "react-icons/si"
import {SiMysql} from "react-icons/si"
import {SiPhp} from "react-icons/si"
 
function Skills() {
  return (
   
    <div className='skills'>
       <div className='skills--container'>
         <h2>My Skills</h2>
         <div className='skills--overlay'>
         <div className='skills--icons'>
          <ul>
          <li><AiFillHtml5/></li>
          <li><SiCss3/></li>
          <li><SiJavascript/></li>
          <li><SiTypescript/></li>
          <li><SiStyledcomponents/></li>
          </ul>
         </div>
         <h2>Studying  Skills</h2> 
         <div className='skills--icons2'>
          <ul>
         <li><SiReact/></li>
         <li><BsGithub/></li>
         <li><SiMysql/></li>
         <li><SiPhp/></li>
         </ul>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;