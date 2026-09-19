import { motion, useReducedMotion } from "framer-motion";

// Fades + lifts content in as it scrolls into view. Renders a plain element
// when the visitor prefers reduced motion.
export default function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = reduce ? as : motion[as];

  if (reduce) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
