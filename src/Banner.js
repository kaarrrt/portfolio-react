
import Insta from './images/icons/instagram.svg'
import Typewriter from "typewriter-effect";
import Github from './images/icons/github.svg'
import Linked from './images/icons/linkedin.svg'
import bannerpc from './images/bannerpc3.png';
import './Banner.css';
function Banner() {
  return (
    <div className="ctn">
      <h1 className="hello">hello!</h1>
      <h1 className="im">I'm</h1>
  <div className="name">KARTHIK MADHUSUDAN</div>
<span className="text">
    <Typewriter
          options={{
        strings: [
          "Web Developer",
          "React",
          "PHP",
          "Python",
        ],
        autoStart: true,
        loop: true,
        delay:50,
        deleteSpeed: 50,
      }}
    
    />
</span>
<img src={bannerpc} alt="" className="bannerpc" />
<div className="social-icons">
  <div className="insta"><a href="https://www.instagram.com/kaarrttt/"><img src={Insta}></img></a></div>
  <div className="github"><a href="https://www.linkedin.com/in/karthik-madhusudan-025363196/"><img src={Github}></img></a></div>
  <div className="linked"><a href="https://github.com/kaarrrt"><img src={Linked}></img></a></div>
</div>

  
  <button className="knowme">Know me</button>
    </div>

  )
}

export default Banner