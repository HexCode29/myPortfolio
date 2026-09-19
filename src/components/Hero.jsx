import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";
import SplitReveal from "./SplitReveal.jsx";
import Magnetic from "./Magnetic.jsx";
import CountUp from "./CountUp.jsx";
import { profile, stats } from "../data.js";
import photoJpg from "../assets/portrait-840.jpg";
import photoWebp420 from "../assets/portrait-420.webp";
import photoWebp840 from "../assets/portrait-840.webp";

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (revealed, delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero({ revealed }) {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);

  // Pointer position drives the spotlight and the photo / card depth parallax.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 90, damping: 20 });
  const smy = useSpring(my, { stiffness: 90, damping: 20 });
  const photoX = useTransform(smx, [-0.5, 0.5], [-12, 12]);
  const photoY = useTransform(smy, [-0.5, 0.5], [-10, 10]);
  const card1X = useTransform(smx, [-0.5, 0.5], [26, -26]);
  const card1Y = useTransform(smy, [-0.5, 0.5], [20, -20]);
  const card2X = useTransform(smx, [-0.5, 0.5], [-34, 34]);
  const card2Y = useTransform(smy, [-0.5, 0.5], [-24, 24]);

  // Scroll parallax: photo drifts slower than the page, copy fades away.
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 800], [0, -70]);
  const copyY = useTransform(scrollY, [0, 800], [0, -50]);
  const copyOpacity = useTransform(scrollY, [0, 560], [1, 0.15]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || reduce) return;
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      mx.set(px - 0.5);
      my.set(py - 0.5);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  const anim = (delay) => (reduce ? {} : fadeUp(revealed, delay));

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
          <motion.span className="pill" {...anim(0.05)}>
            <span className="pulse" /> Open to new opportunities
          </motion.span>

          <h1 className="hero-title">
            <SplitReveal
              text={"Hi, I’m Shahzaib Rao.\nI build products people rely on."}
              highlight={["Shahzaib", "Rao"]}
              active={revealed}
              delay={0.1}
              stagger={0.07}
              as="span"
            />
          </h1>

          <motion.p className="hero-role" {...anim(0.55)}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-summary" {...anim(0.65)}>
            5+ years shipping scalable SaaS platforms, fintech systems and real-time apps with
            React, Node.js, MongoDB and Firebase — for clients across the UK, EU, US and
            Australia.
          </motion.p>

          <motion.div className="hero-cta" {...anim(0.75)}>
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                Let’s talk <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resume} download className="btn btn-ghost">
                <Download size={18} /> Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="hero-meta" {...anim(0.85)}>
            <span className="loc">
              <MapPin size={16} /> {profile.location}
            </span>
            <span className="dot-sep" />
            <a href={profile.github} target="_blank" rel="noreferrer" className="social" aria-label="GitHub">
              <GithubIcon width={20} height={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social" aria-label="LinkedIn">
              <LinkedinIcon width={20} height={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={reduce ? undefined : { y: visualY }}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={reduce ? undefined : revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
        >
          <motion.div className="photo-ring" style={reduce ? undefined : { x: photoX, y: photoY }}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${photoWebp420} 420w, ${photoWebp840} 840w`}
                sizes="(max-width: 860px) 60vw, 420px"
              />
              <img
                src={photoJpg}
                alt="Portrait of Shahzaib Rao"
                width="420"
                height="504"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </motion.div>
          <motion.div className="fc fc-1" style={reduce ? undefined : { x: card1X, y: card1Y }}>
            <div className="float-card">
              <strong>1000+</strong>
              <span>active users</span>
            </div>
          </motion.div>
          <motion.div className="fc fc-2" style={reduce ? undefined : { x: card2X, y: card2Y }}>
            <div className="float-card">
              <strong>React · Node</strong>
              <span>Firebase · MongoDB</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>
                <CountUp to={s.to} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
