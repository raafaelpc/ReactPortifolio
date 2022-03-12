import React, {useState}  from 'react'
import aboutmerafael from '../img/aboutme-rafael.png'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const textoEN = 'Texto em ingles';
const textoPT = 'Texto em Portugues';

function About() {
  const [text , setText] = useState(textoEN)
  const handleClick = () =>{

    if(text === textoEN){
      setText(textoPT)
    }else{
      setText(textoEN)
    }
    
  }

  return (
    <>
      <div className='about'>
        <div className='about--text'>
        <h1>{text}</h1>
        <button onClick={handleClick}><span>Translate</span></button>
        </div>
        <img src={aboutmerafael}/>
        <ul>

            <li className='icon--instagram'><a href='https://instagram.com/raafaelpc' target="_blank" ><FiInstagram/></a></li>

            <li className='icon--linkedin'><a href='https://linkedin.com/in/rafael-patricio-305b191a2/' target="_blank"><FaLinkedin/></a></li>

            <li className='icon--github'><a href='https://github.com/raafaelpc' target="_blank"><FaGithub/></a></li>
          </ul>
      </div>
    </>
  )
}

export default About;