import React from 'react';
import "./Navbar.css";
import {HashLink as Link} from 'react-router-hash-link';
import styled from "styled-components";
const Navbars=styled.ul`text-decoration:none;
position:absolute;
left:43%;
`;
const linkStyle={  
  textDecoration:"none",
  color:"#242423",
  fontFamily:"Bebas Neue,sans-serif",

}
function Navbar() {
  return (
    
      <div className="contain">
      <Navbars><Link to="#project" smooth style={linkStyle}>Projects</Link></Navbars>
      <a href="https://www.linkedin.com/in/karthik-madhusudan-025363196/" className='contact'>Contact</a>
      </div>
    

    

  )
}

export default Navbar