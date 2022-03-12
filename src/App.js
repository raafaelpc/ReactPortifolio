import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// COMPONENTS

import Homepage from "./components/Homepage.js";
import Navbar from "./components/Navbar.js";



//PAGES

import Error from "./pages/Error.js";
import About from "./pages/About.js";
import Skills from "./pages/Skills.js"
import Contacts from "./pages/Contacts.js";
import Footer from "./components/Footer.js";



const App = () => {
  return (
    
  <Router>
    <Navbar/>
    
    <Routes>
      
      <Route path="/" element = {<Homepage/>} ></Route>
      <Route path="/about" element = {<About/>}></Route>
      <Route path="/skills" element = {<Skills/>}></Route>
      <Route path="/contact" element = {<Contacts/>}></Route>

      <Route path="*" element = {<Error/>}></Route>
    
    </Routes>

    <Footer/>
    </Router>
    
  );
}

export default App;
