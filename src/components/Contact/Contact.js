import React from "react";

import Section from "./styled/ContactStyle";

const Contact = () => {
  
  
  return(
    <Section>
      <div className="container" id="contact">
        <h1 id="mainHead">Contact <span>Us</span> </h1>
        <p>Please Feel free to Contact Me</p>

        <div className="card-wrapper">
          <div className="card">
            <img src="src/icons/smartphone.svg" alt="phone"/>
            <h1>Call Me on</h1>
            <h6>0308-0073024</h6>
          </div>
          <div className="card">
            <img src="src/icons/email.svg" alt="email"/>
            <h1>Email Me At</h1>
            <h6>hexcode29@gmail.com</h6>
          </div>
        </div>
        
        <form action="https://send.pageclip.co/DgbN14nFna3oTOWogTLA4JCeGLbjrcS8/contactsData" method="post">
          <div className="input-wrap">
              <input type="text" name="name" placeholder="Your Name*" required/>
              <input type="email" name="email" placeholder="Your Email*" required/>
            </div>

            <div className="input-wrap-2">
              <input type="text" name="subject" placeholder="Your Subject" required/>
              <textarea name="details" id="" cols="30" rows="10" placeholder="Your Message..." required></textarea>  
            </div>  
            <div className="sendMsg">
                <button type="submit">Send Message</button>
            </div>
        </form>
      </div>
    </Section>    
  )
}


export default Contact;