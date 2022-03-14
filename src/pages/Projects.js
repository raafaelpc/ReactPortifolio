import React  from 'react';
import Login from "../img/login.png";
import Projeto1 from "../img/mstudio.png"
/*const textoEN = 'Texto em ingles';
const textoPT = 'Texto em Portugues';*/

function Projects() {
  /*const [text , setText] = useState(textoEN)
  const handleClick = () =>{

    if(text === textoEN){
      setText(textoPT)
    }else{
      setText(textoEN)
    }
    
  }
  <h1>{text}</h1>
        <button onClick={handleClick}><span>Translate</span></button>*/

  return (
      <div className='projects'>
        <div className='projects--container'>
        
          <div className='projects--card'>
            <h1>My Projects</h1>
            <ul>
              <li><h2>MStudio</h2>
                <a href='https://mstd-raafaelpc.vercel.app' target="_blank"><img src={Projeto1}/></a>
              </li>

              <li><h2>Sistema de login</h2>
              <a href='https://login-tawny.vercel.app/login.html' target="_blank"><img src={Login}/></a>
              </li>
             {/* <li><h2>Projeto 3</h2>
              <a href='http://www.google.com' target="_blank"><img src={Teste}/></a>
              </li>  
            </ul>
            <ul>
              <li><h2>Projeto 4</h2>
              <a href='http://www.google.com' target="_blank"><img src={Teste}/></a>
              </li>      
              <li><h2>Projeto 5</h2>
              <a href='http://www.google.com' target="_blank"><img src={Teste}/></a>
              </li>
              <li><h2>Projeto 6</h2>
              <a href='http://www.google.com' target="_blank"><img src={Teste}/></a>
              </li>  */}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Projects;