import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { lockScroll } from "../lib/scroll.js";

const DURATION = 1300;

// Counter-style intro. `onReveal` fires as the curtain starts lifting (so the
// hero can animate in underneath), `onDone` once it has fully left.
export default function Preloader({ onReveal, onDone }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    lockScroll(true);
    const start = performance.now();
    let raf;
    let timer;
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else
        timer = setTimeout(() => {
          setLeaving(true);
          onReveal();
        }, 220);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      lockScroll(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="preloader"
      role="status"
      aria-label="Loading"
      initial={{ y: 0 }}
      animate={{ y: leaving ? "-100%" : 0 }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => leaving && onDone()}
    >
      <div className="preloader-top">
        <span>Shahzaib Rao</span>
        <span>Portfolio {new Date().getFullYear()}</span>
      </div>
      <div className="preloader-count">
        {String(count).padStart(2, "0")}
        <small>%</small>
      </div>
      <div className="preloader-bar">
        <span style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </motion.div>
  );
}
