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
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/html.svg"/>
              <h2>HTML</h2>
              <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/css.svg"/>
              <h2>CSS</h2>
              <p>I will provide good responsive websites using CSS (grid & flexbox) .</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/javascript.svg"/>
              <h2>Javascript</h2>
              <p>Fully functional website using Javascript .</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/react.svg"/>
              <h2>React</h2>
              <p>React has become so popular so quickly and it becomes standard.</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/nodejs.svg" alt="img"/>
              <h2>Node Js</h2>
              <p>Node.js has been regarded as a full-stack JavaScript for serving both the client and the server-side applications.</p>
            </div>  
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/firebase.svg"/>
              <h2>Firebase</h2>
              <p>If you have a business applications or are considering to start one, Firebase is one of the good options available for that.</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/mongodb.svg"/>
              <h2>Mongo DB</h2>
              <p>MongoDB is more fast and scalable in comparison to the SQL server and  MongoDB supports a big amount of data.</p>
            </div>                      
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/serverless.svg" alt="img"/>
              <h2>Serverless</h2>
              <p>This is the new movement in the software design. It has lower-cost, Enhanced-scalibility.</p>
            </div> 
            <div className="card">
              <img src="https://raw.githubusercontent.com/HexCode29/myPortfolio/b828201b84ebbba6314e6b8b836a74fee595d83b/src/icons/redux.svg" alt="img"/>
              <h2>Redux</h2>
              <p>Redux is a state management tool for JavaScript applications. While it is frequently used with React, and it is compatible with many other framworks also.</p>
            </div> 
          </div>
      </div>      
    </Section>
  )
}


export default Services;