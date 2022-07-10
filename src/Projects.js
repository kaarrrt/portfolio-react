import React from 'react'
import './Projects.css'
import ecomm from './images/ecomm.png'
import ProjectCard from './ProjectCard.js'
function Projects() {
  return (
    <div className="project">
        <div className="project-ctn">
          <ProjectCard img={ecomm} title={"Ecommerce Development"}/>
          <ProjectCard img={ecomm} title={"Ecommerce Development"}/>
          <ProjectCard img={ecomm} title={"Ecommerce Development"}/>
        </div>
        <div className="ptitle">Projects</div>
    </div>
  )
}

export default Projects