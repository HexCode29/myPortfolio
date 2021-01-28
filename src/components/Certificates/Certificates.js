import React from "react";
import CertificateSection from "./styled/CertStyle";


//assets

// import Scrimba from "../../images/projects/Scrimba";

const Certificate = () => {
  return(
    <CertificateSection id="projects" className="projects">
         <div className="container">
           <h1><span>My</span> Certificates</h1>

           <div className="card-wrapper">
             <div className="card">
               <div className="overlay">
                 <a href="https://scrimba.com/certificate/uDRDPRuz/glearnreact">React Course Scrimba</a>
               </div>
               <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/master/src/images/projects/scrimba-2.png" alt="Scrimba"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="https://www.interaction-design.org/shahzaib-rao/certificate/course/PjjBJZClK">(UX) Conducting Usability Testing</a>
                </div>
                <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/master/src/images/projects/CUS.jpg" alt="IDF-1"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="https://www.interaction-design.org/shahzaib-rao/certificate/course/fltqnHSHvJ5JngzJXq">(UX) User-Exp-Guide</a>
                </div>
                <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/master/src/images/projects/UXGUIDE.jpg" alt="IDF-2"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="https://www.interaction-design.org/shahzaib-rao/certificate/course/PkzqdGDMC">(UX) Get your Product Adoption</a>
                </div>
                <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/master/src/images/projects/UXAD.jpg" alt="IDF-3"/>
             </div>
           </div>
         </div>
      </CertificateSection>
  )
}

export default Certificate;