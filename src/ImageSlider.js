import React,{useState} from 'react'
import right from './images/icons/right.svg'
import git from './images/icons/github1.svg';
import ProjectImage from './ProjectIImage';
import './ImageSlider.css';
const ImageSlider = () => {
  const [image,setImage]=useState(0);
  const length=ProjectImage.length;
  const nextSlide=()=>{
    setImage(image===length-1?0:image+1);
  }
  return (
    <>
    <div className='slider'>
    <img src={right} alt="leftt" className="left" onClick={()=>nextSlide()}/>
    <img src={right} alt="right" className="right" onClick={()=>nextSlide()} />
    {ProjectImage.map((slide,index)=>{
      return(
        <div className={index===image?'slide-active':'slide' } key={index}>
          {index===image && (<img src={slide.image} alt="" className="images"/>)}
          
        </div>
      )
    })}
    <a href={image===0?"https://github.com/kaarrrt/amazon-clone":"https://github.com/kaarrrt/DBMS-project"}>
      <button className="git-button"><img src={git} alt="gits" className="git-image" /></button></a>
    </div>
    </>
        

    
    
  )
}
export default ImageSlider;