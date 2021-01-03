import React from "react";


// styled component
import StyledHeader from "./styled/StyledHeader";
// import Animation from "./Animation/animation";

const Header = () => {

  return(
    <StyledHeader>
      {/* <div class="animation" style={{width: "200px", position: "fixed", zIndex: "100"}}><Animation/></div> */}
      <div className="container">
        <nav id="main-nav">
            <div className="left">
              <div className="branding">
                <a class="site-logo" href="/">
                  <span class="logo-text">HEX</span>
                </a>
              </div>  
              <div className="nav-link">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
              </div>
            </div>
            <div className="right">
              <a href="#contact"><button>Contact</button></a>
            </div>
        </nav>
        <div className="hero">
          <div className="description">
            <h6>Shahzaib Rao</h6>
            <h1>I am a Full-Stack Web <span>Developer</span></h1>
            <p> I can make website's both the front-end and back-end, using latest technologies like React, NodeJS etc. This also may include database, API or other integrations.</p>
            <div>
              <a href="../../images/resume.pdf" download><button>Download CV</button></a>
            </div>
          </div>
        </div>
      </div> 
    </StyledHeader>
  )
}

export default Header;