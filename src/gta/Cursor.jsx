import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "../lib/scroll.js";

// Crosshair-style reticle that trails the pointer (mouse devices only).
// The native cursor stays visible.
export default function Cursor() {
  const [enabled] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion()
  );
  const [target, setTarget] = useState(false);
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 34, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 34, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e) => setTarget(!!e.target.closest?.("a, button, [role='button']"));
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
    <motion.div
      className={`reticle ${hidden ? "is-hidden" : ""} ${target ? "is-target" : ""}`}
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
      <i />
    </motion.div>
  );
}
