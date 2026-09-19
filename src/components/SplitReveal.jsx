import { motion, useReducedMotion } from "framer-motion";

const clean = (w) => w.replace(/[.,!?]/g, "");

const parent = (delay, stagger) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
const word = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

// Masked word-by-word reveal. `active` drives it manually (hero); when it is
// undefined the text reveals as it scrolls into view. Words listed in
// `highlight` get the serif accent style. "\n" starts a new line.
export default function SplitReveal({
  text,
  as = "span",
  className = "",
  highlight = [],
  active,
  delay = 0,
  stagger = 0.06,
}) {
  const reduce = useReducedMotion();
  const Tag = reduce ? as : motion[as];
  const lines = text.split("\n");

  const motionProps = reduce
    ? {}
    : {
        variants: parent(delay, stagger),
        initial: "hidden",
        ...(active === undefined
          ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -12% 0px" } }
          : { animate: active ? "show" : "hidden" }),
      };

  return (
    <Tag className={`split ${className}`} aria-label={text.replace(/\n/g, " ")} {...motionProps}>
      {lines.map((line, li) => (
        <span className="sr-line" aria-hidden="true" key={li}>
          {line.split(" ").map((w, i) => {
            const em = highlight.includes(clean(w));
            const inner = reduce ? (
              <span className={`sw-in ${em ? "serif-em" : ""}`}>{w}</span>
            ) : (
              <motion.span className={`sw-in ${em ? "serif-em" : ""}`} variants={word}>
                {w}
              </motion.span>
            );
            return (
              <span key={i}>
                <span className="sw">{inner}</span>{" "}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
