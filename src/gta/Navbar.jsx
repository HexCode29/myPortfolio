import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Monogram from "./Monogram.jsx";
import { profile } from "../data.js";
import { lockScroll } from "../lib/scroll.js";
import portrait from "../assets/portrait-420.webp";

export const menu = [
  { id: "missions", label: "Missions", hint: "Career route" },
  { id: "skills", label: "Stats", hint: "Skills & loadout" },
  { id: "projects", label: "Jobs", hint: "Shipped products" },
  { id: "certificates", label: "Achievements", hint: "Certificates" },
  { id: "contact", label: "Phone", hint: "Get in touch" },
];

// Full-screen "pause menu" used as the site menu on every screen size.
function PauseMenu({ onClose }) {
  useEffect(() => {
    lockScroll(true);
    return () => lockScroll(false);
  }, []);

  return (
    <motion.div
      className="pause"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="pause-inner" onClick={(e) => e.stopPropagation()}>
        <div className="pause-top">
          <span className="pause-title">Paused</span>
          <button className="pause-close" onClick={onClose}>
            <kbd>Esc</kbd> Resume
          </button>
        </div>
        <div className="pause-grid">
          <nav aria-label="Sections">
            {menu.map((m, i) => (
              <motion.a
                key={m.id}
                href={`#${m.id}`}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
              >
                <span>{m.label}</span>
                <small>{m.hint}</small>
              </motion.a>
            ))}
          </nav>
          <motion.aside
            className="pause-brief"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <img src={portrait} alt="" width="96" height="115" />
            <div>
              <small>Brief</small>
              <strong>{profile.name}</strong>
              <p>{profile.summary}</p>
              <div className="pause-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-hot btn-sm">
                  <Mail size={16} /> Email me
                </a>
                <a href={profile.resume} download className="btn btn-glass btn-sm">
                  <Download size={16} /> CV
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e) => {
      if (e.key === "Escape" && !document.querySelector(".lightbox")) setOpen((o) => !o);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <motion.div className="nav-progress" style={{ scaleX: progress }} />
        <div className="nav-inner">
          <a href="#top" className="nav-brand" aria-label={`${profile.name}, home`}>
            <Monogram size={38} />
            <span>{profile.name}</span>
          </a>
          <div className="nav-right">
            <a href="#contact" className="btn btn-hot btn-sm nav-hire">
              Hire me
            </a>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{open && <PauseMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
