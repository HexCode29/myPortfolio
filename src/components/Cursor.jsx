import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "../lib/scroll.js";

// Ring that trails the pointer and grows over interactive elements. The native
// cursor stays visible; this is only rendered for mouse-like devices.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e) => {
      const el = e.target.closest?.("[data-cursor], a, button");
      setMode(el ? el.dataset.cursor || "link" : "");
    };
    const leave = () => setHidden(true);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div className={`cursor ${hidden ? "is-hidden" : ""}`} aria-hidden="true">
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div className="cursor-ring" style={{ x: rx, y: ry }}>
        <span className={`cursor-inner ${mode ? `is-${mode}` : ""}`}>
          {mode === "view" && <em>View</em>}
        </span>
      </motion.div>
    </div>
  );
}
