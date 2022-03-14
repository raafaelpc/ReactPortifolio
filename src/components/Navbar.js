import { useState } from 'react';
import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';
/*ICONS-NAVBAR*/






function Navbar() {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <div className={`${isOpen ? "navbar-open" :  "navbar-btn"}`}>
        <button onClick={()=>setIsOpen(!isOpen)}>
            <BiMenuAltRight/>
        </button>
        </div>
    
        
        <header className={`${isOpen ? "header open" : "header"}`}>
        
            <nav>
                <ul>
                    <li onClick={()=> setIsOpen(false)}>
                         <Link to="/">Sobre</Link>
                    </li>
                   <li onClick={()=> setIsOpen(false)}>
                       <Link to="/projects">Projetos</Link>
                    </li>
                    <li onClick={()=> setIsOpen(false)}>
                        <Link to="/skills">Habilidades</Link>
                    </li>
                    <li onClick={()=> setIsOpen(false)}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
        
            </nav>
            </header>

    </>
  )
}

export default Navbar;