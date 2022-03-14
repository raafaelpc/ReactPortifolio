import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import ImgContact from "../img/imgcontact.png";

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts--container'>
      <h1>My Contacts</h1>
      <div className='contacts--img'>
      <img src={ImgContact}/>
      
      </div>
      
      <div className='contacts--name'>
      <a className='button' href="mailto:rafael29pc@hotmail.com">Email</a>  
      <div className='teste'>
        <ul>

            <li className='icon--instagram'><a href='https://instagram.com/raafaelpc' target="_blank" ><FiInstagram/></a></li>

            <li className='icon--linkedin'><a href='https://linkedin.com/in/rafael-patricio-305b191a2/' target="_blank"><FaLinkedin/></a></li>

            <li className='icon--github'><a href='https://github.com/raafaelpc' target="_blank"><FaGithub/></a></li>
          </ul>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contacts;