import React from "react";

// style-component
import Section from "./styled/AboutStyle";

const About = () => {
  
  return(
    <Section id="about" className="about">
      <div className="container">
        <div className="aboutImg">
          <img src="../images/dp2.jpg" alt="about-img"/>
        </div>
        <div className="bio">
          <h1>About <span>Me</span></h1>
          <h3>Hello i'm Shahzaib Rao <span>@hexcode29</span></h3>
          <p>I am a Full Stack Web Developer, UX designer and doing BSCS(Computer Science) from GC University Faisalabad. I have also make different projects using my skills.</p>
          <div className="social">
            <a href="https://bit.ly/39NXVmh" target="_blank"><img src="../../../icons/linkedin.svg" alt="linkedin"/></a>
            <a href="https://twitter.com/HexCode29"><img src="../../../icons/twitter.svg" alt="twitter"/></a>
            <a href="https://www.facebook.com/AttitudeRunsDeep"><img src="../../../icons/facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="../../../icons/instagram.svg" alt="instagram"/></a>
          </div>
        </div>
      </div>
    </Section>
  )
}


export default About;