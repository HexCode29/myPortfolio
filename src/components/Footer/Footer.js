import React from "react";


// styled component
import Section from "../Footer/styled/FooterStyle";



const Footer = () => {  
  return(
    <Section className="footer">
          <a className="site-logo" href="/">
            <span className="logo-text">HEX</span>
          </a>
        <div className="footer-socials">
            <a href="https://bit.ly/39NXVmh" target="_blank"><img src="../../../icons/linkedin.svg" alt="linkedin"/></a>
            <a href="https://twitter.com/HexCode29"><img src="../../../icons/twitter.svg" alt="twitter"/></a>
            <a className="fb" href="https://www.facebook.com/AttitudeRunsDeep"><img src="../../../icons/facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="../../../icons/instagram.svg" alt="instagram"/></a>
        </div>
        <div className="copyright">
          Copy 2020 &copy; Hexcode29. All Right Reserved.
        </div>
    </Section>
  )
}


export default Footer;