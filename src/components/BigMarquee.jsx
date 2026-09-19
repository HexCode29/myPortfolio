import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { marquee } from "../data.js";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Row that drifts sideways and speeds up / reverses with scroll velocity.
function Row({ items, baseVelocity, outline }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  const copy = (k) => (
    <span className="bm-copy" key={k}>
      {items.map((t) => (
        <span key={t} className="bm-item">
          {t}
          <i>✦</i>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`bm-row ${outline ? "is-outline" : ""}`}>
      <motion.div className="bm-track" style={{ x: reduce ? "-25%" : x }}>
        {[0, 1, 2, 3].map(copy)}
      </motion.div>
    </div>
  );
}

export default function BigMarquee() {
  const half = Math.ceil(marquee.length / 2);
  return (
    <section id="marquee" className="bigmarquee" aria-hidden="true">
      <Row items={marquee.slice(0, half)} baseVelocity={-2.2} />
      <Row items={marquee.slice(half)} baseVelocity={2.2} outline />
    </section>
  );
}
