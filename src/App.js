import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// COMPONENTS

import Homepage from "./components/Homepage.js";
import Navbar from "./components/Navbar.js";



//PAGES

import Error from "./pages/Error.js";
import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js"
import Contacts from "./pages/Contacts.js";
import Footer from "./components/Footer.js";



const App = () => {
  return (
    
  <Router>
    <Navbar/>
    
    <Routes>
      
      <Route path="/" element = {<Homepage/>} ></Route>
      <Route path="/projects" element = {<Projects/>}></Route>
      <Route path="/skills" element = {<Skills/>}></Route>
      <Route path="/contact" element = {<Contacts/>}></Route>

      <Route path="*" element = {<Error/>}></Route>
    
    </Routes>

    <Footer/>
    </Router>
    
  );
}

export default App;
