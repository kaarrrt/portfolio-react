import React from 'react'
import pc from './images/chatify.png'
import git from './images/icons/github.svg';
import './ProjectCard.css';
function ProjectCard(props) {
  return (
    <div className="card-ctn">
            <img src={pc} className="pc" />
            <img src={props.img} className="pimg" />
        <h1 className="title">{props.title}</h1>
        <button className="ghub"><img src={git} alt="" /></button>
        <p className="desc"></p>
    </div>
  )
}

export default ProjectCard