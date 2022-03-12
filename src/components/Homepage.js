/* eslint-disable jsx-a11y/alt-text */

import { useState } from 'react';
import React from 'react';
import { saveAs } from "file-saver";
import { Link } from 'react-router-dom';
import Homepageimg from "../img/fotoperfil.jpg";
import {BsDownload} from "react-icons/bs";
import jsPDF from 'jspdf';
import Curriculo from '../download/curriculo.pdf'


const textoEN = (<div className='.homepage .overlay'> <h4>WELCOME TO MY PORTFOLIO</h4>
<h1 >Hi, my name is Rafael!</h1>
<h3 >Hey! My name is Rafael Patricio
I'm 22 years old and I'm a Front-End Student and Developer and future Full stack.
Currently I'm focused on studying JavaScript, ReactJs, Php, MySQL, NodeJs, etc...
I am currently studying the 5th period in the Computer Science course at Centro Universitário Estácio do Ceará.</h3>
</div>);


const textoPT = (<div className='.homepage .overlay'> <h4>BEM VINDO AO MEU PORTFÓLIO</h4>
<h1 >Olá, me chamo Rafael!</h1>
<h3>Opa! Meu nome é Rafael Patricio 
tenho 22 anos e sou um Estudante e Desenvolvedor Front-End e futuro Full stack. 
Atualmente estou focado em estudar JavaScript, ReactJs, Php, MySQL, NodeJs, etc...
Estou cursando atualmente o 5º periodo no curso de Ciencias da Computacão pelo Centro Universitário Estácio do Ceará.</h3>
</div>);


function Homepage() {

  /*const saveFile = () => {
    saveAs(
      "../../download/curriculo.pdf",
      "curriculo.pdf"
    );
  };*/

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
    <section className='homepage'>
      
        <div className='overlay'>
             <div className='overlay--name'>
            
            {/*<h3>BEM VINDO AO MEU PORTFÓLIO.</h3>
            <h1>Olá, me chamo Rafael!
            Desenvolvedor Front-End Web</h1>
            <p>Opa! Tudo bem? Meu nome é Gian Lucas, 
              tenho 17 anos e sou um Desenvolvedor Front-Ent Web. 
              Atualmente estou focado em estudar a stack ReactJS + NextJS + Chakra UI + styled-components. 
              Fiz o curso técnico em informática integrado ao ensino médio no IFPB 
               e irei ingressar em Ciência da Computação na UEPB.</p>*/}
               

              <div className='translate'>
              <h1>{text}</h1>
              <div className='translate--center'>
              <button onClick={handleClick}><span>Translate</span></button>
              <a href={Curriculo} download="Curriculo" target='_blank'>Download CV<BsDownload/></a>
              
              </div>
              </div>
            </div>
            
             <div className='overlay--img'>
               <img src={Homepageimg}/>
               
            </div>
            
            
           {/* <button ><span><Link to="/about">Sobre Mim</Link></span></button>
            <Link to="file//public\curriculo.pdf" target="_blank" download>Download <BsDownload/></Link> 
  <button onClick={pdfGenerate}>Download pdf</button>*/}
            
            
            
            
              
                      
            
            
             
            
        
        
           
            
        </div>
       
        </section>
    </>
  )
}


export default Homepage;
