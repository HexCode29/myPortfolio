import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import LoadingScreen from "./gta/LoadingScreen.jsx";
import Navbar from "./gta/Navbar.jsx";
import Hero from "./gta/Hero.jsx";
import Missions from "./gta/Missions.jsx";
import Arsenal from "./gta/Arsenal.jsx";
import Projects from "./gta/Projects.jsx";
import Achievements from "./gta/Achievements.jsx";
import Contact from "./gta/Contact.jsx";
import MissionPassed from "./gta/MissionPassed.jsx";
import Cursor from "./gta/Cursor.jsx";
import { prefersReducedMotion, setLenis } from "./lib/scroll.js";

// The loading screen plays once per browser session and never for
// reduced-motion users.
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

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, anchors: true });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  const reveal = useCallback(() => setRevealed(true), []);
  const finish = useCallback(() => {
    setShowLoader(false);
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <>
      <Cursor />
      <AnimatePresence>{showLoader && <LoadingScreen onReveal={reveal} onDone={finish} />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero revealed={revealed} />
        <Missions />
        <Arsenal />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <MissionPassed />
    </>
  );
}
