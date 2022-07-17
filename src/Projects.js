import React from 'react'
import './Projects.css'
import ImageSlider from './ImageSlider.js'
function Projects() {

  return (
    <div id="project">
        <div className="ptitle">Projects</div>
        <div className='project-line'></div>
        <div className="img-overlays">
          {/* <img src={ecomm} alt="" className={cngClass.ecomm_class}/> */}
          <ImageSlider />
          {/* <div className="overlay1">
            <a href='https://github.com/kaarrrt/amazon-clone' ><button className="git-btn"><img src={git}  className="git-image" alt="clone"/></button></a>
          </div> */}
          {/* <img src={cabs} alt="" className={cngClass.cabs_class}/> */}
          {/* <div className="overlay2">
            <a href="https://github.com/kaarrrt/DBMS-project"><button className="git-btn" ><img src={git}  className="git-image" alt="cabs"/></button></a>
          </div> */}
        </div>
        
      </div>
        
  )
}



export default Projects