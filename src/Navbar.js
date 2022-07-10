import React from 'react';
import "./Navbar.css";
import logo from "./images/Logo.png";
import Button from '@material-ui/core/Button';

function Navbar() {
  return (
    
    <div className="contain">
      <button className="projects">Projects</button>
      <a href="https://www.linkedin.com/in/karthik-madhusudan-025363196/"><button className="contact">Contact</button></a>
    </div>
    

  )
}

export default Navbar