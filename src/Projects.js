import React from 'react'
import './Projects.css'
import ecomm from './images/clone.png'
import git from './images/icons/github.svg';
import cabs from './images/cabs.png';
function Projects() {
  return (
    <div id="project">
        <div className="ptitle">Projects</div>
        <div className='project-line'></div>
        <div className="img-overlays">
          <img src={ecomm} alt="" className="ecomm"  id='ecom'/>
          <div className="overlay1">
            <a href='https://github.com/kaarrrt/amazon-clone' ><button className="git-btn"><img src={git}  className="git-image" alt="clone"/></button></a>
          </div>
          <img src={cabs} alt="" className="cabs" />
          <div className="overlay2">
            <a href="https://github.com/kaarrrt/DBMS-project"><button className="git-btn" ><img src={git}  className="git-image" alt="cabs-image"/></button></a>
          </div>
          
        </div>
        
      </div>
        
  )
}



export default Projects