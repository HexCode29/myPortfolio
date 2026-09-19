import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";
import { marquee, profile, stats } from "../data.js";
import photo from "../assets/shahzaib.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const child = reduce ? {} : { variants: item };

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" {...anim}>
          <motion.span className="pill" {...child}>
            <span className="pulse" /> Open to new opportunities
          </motion.span>

          <motion.h1 {...child}>
            Hi, I’m <span className="gradient-text">Shahzaib Rao</span>.
            <br />
            I build products people rely on.
          </motion.h1>

          <motion.p className="hero-role" {...child}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-summary" {...child}>
            5+ years shipping scalable SaaS platforms, fintech systems and real-time apps with
            React, Node.js, MongoDB and Firebase — for clients across the UK, EU, US and
            Australia.
          </motion.p>

          <motion.div className="hero-cta" {...child}>
            <a href="#contact" className="btn btn-primary">
              Let’s talk <ArrowRight size={18} />
            </a>
            <a href={profile.resume} download className="btn btn-ghost">
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div className="hero-meta" {...child}>
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
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-ring">
            <img src={photo} alt="Portrait of Shahzaib Rao" width="420" height="420" />
          </div>
          <div className="float-card fc-1">
            <strong>1000+</strong>
            <span>active users</span>
          </div>
          <div className="float-card fc-2">
            <strong>React · Node</strong>
            <span>Firebase · MongoDB</span>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
