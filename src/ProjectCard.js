import React from 'react'
import pc from './images/chatify.png'
import git from './images/icons/github.svg';
import './ProjectCard.css';
function ProjectCard(props) {
  return (
    <div className="card-ctn">
            <img src={pc} className="pc" alt="pc"/>
            <img src={props.img} className="pimg" alt="img"/>
        <h1 className="title">{props.title}</h1>
        <button className="ghub"><a href={props.link}><img src={git} alt="" /></a></button>
        <p className="desc"></p>
    </div>
  )
}

export default ProjectCard