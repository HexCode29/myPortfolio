import React from "react";


// styled component
import Section from "./styled/ProjectDivStyle";
import {ProjectSection} from "./styled/ProjectDivStyle";


const Projects = () => {
  
  return(
    <>
      <Section classname="freelancer">
            <h1>I am also available for freelancer.</h1>
            <button>Download CV</button>
      </Section>
      
      <ProjectSection id="projects" className="projects">
         <div className="container">
           <h1><span>My</span> Projects</h1>
           <p>I am provide high standard and clean website for your business using latest technologies.</p>

           <div className="card-wrapper">
             <div className="card">
               <div className="overlay">
                 <a href="#">Real-Time Pizza Order Project</a>
               </div>
               <img src="../../src/images/projects/pizzaApp.png" alt="pizzaApp"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="#">Gallery using Firebase Storage API</a>
                </div>
                <img src="../../src/images/projects/gallery.png" alt="galleryApp"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="#">Real-Time Chat-Application</a>
                </div>
                <img src="../../src/images/projects/chatApp.png" alt="chatApp"/>
             </div>
             <div className="card">
                <div className="overlay">
                  <a href="#">Simple Url Shortner</a>
                </div>
                <img src="../../src/images/projects/urlShortner.png" alt="urlShortApp"/>
             </div>
           </div>
         </div>
      </ProjectSection>
    </>
  )
}


export default Projects;