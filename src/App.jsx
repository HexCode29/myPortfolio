import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BigMarquee from "./components/BigMarquee.jsx";
import Manifesto from "./components/Manifesto.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import Preloader from "./components/Preloader.jsx";
import { prefersReducedMotion, setLenis } from "./lib/scroll.js";

// The intro plays once per browser session and never for reduced-motion users.
const shouldSkipIntro = () => {
  if (prefersReducedMotion()) return true;
  try {
    return sessionStorage.getItem("intro-seen") === "1";
  } catch {
    return false;
  }
};

export default function App() {
  const [skip] = useState(shouldSkipIntro);
  const [revealed, setRevealed] = useState(skip);
  const [showLoader, setShowLoader] = useState(!skip);

  // Smooth (inertial) scrolling, like the reference sites.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -72 } });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  const finishIntro = () => {
    setShowLoader(false);
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <Cursor />
      <AnimatePresence>
        {showLoader && <Preloader onReveal={() => setRevealed(true)} onDone={finishIntro} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero revealed={revealed} />
        <BigMarquee />
        <Manifesto />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
