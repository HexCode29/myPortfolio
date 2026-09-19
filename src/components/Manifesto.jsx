import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "I design and build scalable web and mobile products — from architecture to deployment — with a focus on performance, clean code and production-ready results.";
const HIGHLIGHT = ["scalable", "performance", "production-ready"];
const words = TEXT.split(" ");

function Word({ word, index, progress, reduce }) {
  const start = (index / words.length) * 0.85;
  const opacity = useTransform(progress, [start, start + 0.15], [0.14, 1]);
  const em = HIGHLIGHT.includes(word.replace(/[.,]/g, ""));
  return (
    <>
      <motion.span className={em ? "serif-em" : ""} style={reduce ? undefined : { opacity }}>
        {word}
      </motion.span>{" "}
    </>
  );
}

// Statement whose words light up one by one as the section scrolls through.
export default function Manifesto() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });

  return (
    <section id="manifesto" className="manifesto" ref={ref}>
      <div className="container">
        <span className="eyebrow">What I do</span>
        <p className="manifesto-text" aria-label={TEXT}>
          {words.map((w, i) => (
            <Word key={i} word={w} index={i} progress={scrollYProgress} reduce={reduce} />
          ))}
        </p>
      </div>
    </section>
  );
}
