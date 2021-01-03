import React from "react";

// Components
// import MobileNav from "./mobile-nav/MobileNav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Header/Animation/animation";


// styled
// import DIV from "./mobile-nav/mobileNavStyle";


const App = () => {

 return(
    <div>
        <div class="animation" style={{width: "100px", position: "fixed", zIndex: "100", marginRight: "100px"}}><Animation/></div>
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
};

export default App;