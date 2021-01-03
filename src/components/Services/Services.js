import React from "react";

// style-component
import Section from "./styled/ServicesStyle";

const Services = () => {
  
  return(
    <Section id="services" className="services">
      <div className="container">
          <h1><span>My</span> Services</h1>
          <p>I will provide high standard and clean website for your business by using <br/> these latest technologies InshaAllah.</p>
          <div className="card-wrapper">
            <div className="card">
              <img src="src/icons/html.svg"/>
              <h2>HTML</h2>
              <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
            </div>
            <div className="card">
              <img src="src/icons/css.svg"/>
              <h2>CSS</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>
            <div className="card">
              <img src="src/icons/javascript.svg"/>
              <h2>Javascript</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>
            <div className="card">
              <img src="src/icons/react.svg"/>
              <h2>React</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>
            <div className="card">
              <img src="src/icons/nodejs.svg" alt="img"/>
              <h2>Node Js</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>  
            <div className="card">
              <img src="src/icons/firebase.svg"/>
              <h2>Firebase</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>
            <div className="card">
              <img src="src/icons/mongodb.svg"/>
              <h2>Mongo DB</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div>                      
            <div className="card">
              <img src="src/icons/serverless.svg" alt="img"/>
              <h2>Serverless</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div> 
            <div className="card">
              <img src="src/icons/redux.svg" alt="img"/>
              <h2>Redux</h2>
              <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
            </div> 
          </div>
      </div>      
    </Section>
  )
}


export default Services;