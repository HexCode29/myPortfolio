import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

// 0 → 1 progress of a tall section scrolling past a sticky stage: 0 when its
// top reaches the top of the viewport, 1 when its bottom reaches the bottom.
// Driven by plain scroll events so it stays in sync with Lenis.
export default function useSectionProgress(ref) {
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      progress.set(range > 0 ? Math.min(1, Math.max(0, -r.top / range)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, progress]);

  return progress;
}
