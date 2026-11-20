import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { lockScroll } from "../lib/scroll.js";
import Monogram from "./Monogram.jsx";
import portrait from "../assets/portrait-840.webp";

const MIN_MS = 1800; // always show the loader long enough to read a tip
const MAX_MS = 8000; // never block the page longer than this

const tips = [
  "TIP: Shahzaib ships production-ready React apps. Hiring him is faster than respawning.",
  "TIP: Stripe, PayPal and real-time sockets are already in his inventory.",
  "TIP: Clients in the UK, EU, US and Australia have completed missions with him.",
  "TIP: Press ESC anytime to open the pause menu.",
];

const preload = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });

// Full-screen loading screen. Waits for fonts + the hero portrait (with a
// minimum and maximum time), then fades out. `onReveal` fires as it starts
// fading so the hero intro plays underneath; `onDone` once it is gone.
export default function LoadingScreen({ onReveal, onDone }) {
  const [progress, setProgress] = useState(0);
  const [tip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    lockScroll(true);
    const start = performance.now();
    let raf;
    let ready = false;

    Promise.race([
      Promise.all([document.fonts?.ready, preload(portrait)]),
      new Promise((r) => setTimeout(r, MAX_MS)),
    ]).then(() => {
      ready = true;
    });

    const tick = (now) => {
      const elapsed = now - start;
      // Creep toward 90% while loading, then run to 100% once ready.
      const target = ready && elapsed > MIN_MS ? 100 : Math.min(90, (elapsed / MIN_MS) * 90);
      setProgress((p) => {
        const next = p + (target - p) * 0.08;
        return target === 100 && next > 99.5 ? 100 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lockScroll(false);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || leaving) return;
    const t = setTimeout(() => {
      setLeaving(true);
      onReveal();
    }, 250);
    return () => clearTimeout(t);
  }, [progress, leaving, onReveal]);

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading"
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={() => leaving && onDone()}
    >
      <div className="loader-glow" aria-hidden="true" />
      <div className="loader-mark">
        <Monogram size={132} />
      </div>
      <p className="loader-tip">{tip}</p>
      <div className="loader-spin" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" />
        </svg>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="loader-bar" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </motion.div>
  );
}
