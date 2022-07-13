import React from 'react'
import './Projects.css'
import ecomm from './images/ecomm.png'
import ProjectCard from './ProjectCard.js'
function Projects() {
  return (
    <div id="project">
        <div className="ptitle">Projects</div>
        <div className="project-ctn">
          <ProjectCard img={ecomm} title={"Ecommerce Development"} link={"https://github.com/kaarrrt/amazon-clone.git"}/>
          <ProjectCard img={ecomm} title={"Cab Management System"} link={"https://github.com/kaarrrt/DBMS-project.git"}/>
          <ProjectCard img={ecomm} title={"Ecommerce Development"}/>
        </div>
        
    </div>
  )
}

export default Projects