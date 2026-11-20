import { useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { ArrowDown, Download, Crosshair } from "lucide-react";
import Magnetic from "../components/Magnetic.jsx";
import useSectionProgress from "../lib/useSectionProgress.js";
import { CodeScene, NeonScene, PhoneScene, SkylineScene, SunsetScene, WantedScene } from "./Scenes.jsx";
import { profile } from "../data.js";
import photoJpg from "../assets/portrait-840.jpg";
import photoWebp420 from "../assets/portrait-420.webp";
import photoWebp840 from "../assets/portrait-840.webp";

const ease = [0.22, 1, 0.36, 1];

function Portrait() {
  return (
    <div className="scene-portrait">
      <picture>
        <source
          type="image/webp"
          srcSet={`${photoWebp420} 420w, ${photoWebp840} 840w`}
          sizes="(max-width: 860px) 90vw, 36vw"
        />
        <img src={photoJpg} alt="Portrait of Shahzaib Rao" width="840" height="1008" fetchPriority="high" />
      </picture>
      <span className="portrait-tag">Shahzaib</span>
    </div>
  );
}

// Each poster panel starts as a dark silhouette at its own depth and flies in.
const panels = [
  { key: "sunset", Scene: SunsetScene, depth: 1.25, delay: 0.1 },
  { key: "portrait", Scene: Portrait, depth: 0.85, delay: 0.0 },
  { key: "phone", Scene: PhoneScene, depth: 1.3, delay: 0.22 },
  { key: "code", Scene: CodeScene, depth: 1.18, delay: 0.3 },
  { key: "skyline", Scene: SkylineScene, depth: 0.8, delay: 0.16 },
  { key: "neon", Scene: NeonScene, depth: 1.22, delay: 0.38 },
  { key: "wanted", Scene: WantedScene, depth: 0.82, delay: 0.26 },
];

export default function Hero({ revealed }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // The hero is a tall section with a sticky stage: scrolling zooms into the
  // poster, fades the title, then brings in the statement line.
  const p = useSectionProgress(ref);
  const posterScale = useTransform(p, [0, 1], reduce ? [1, 1] : [1, 1.45]);
  const shade = useTransform(p, [0.1, 0.6], [0, 0.82]);
  const copyOpacity = useTransform(p, [0, 0.28], [1, 0]);
  const copyY = useTransform(p, [0, 0.28], reduce ? [0, 0] : [0, -60]);
  const stmtOpacity = useTransform(p, [0.42, 0.62, 0.92, 1], [0, 1, 1, 0.9]);
  const stmtScale = useTransform(p, [0.42, 0.75], reduce ? [1, 1] : [0.86, 1]);
  const hintOpacity = useTransform(p, [0, 0.08], [1, 0]);

  const show = revealed || reduce;
  const fade = (delay, y = 18) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-stage">
        <motion.div className="poster-zoom" style={{ scale: posterScale }}>
          <motion.div
            className="poster"
            initial={reduce ? false : { scale: 1.43 }}
            animate={reduce ? undefined : { scale: show ? 1 : 1.43 }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {panels.map(({ key, Scene, depth, delay }) => (
              <motion.div
                key={key}
                className={`panel panel-${key}`}
                initial={reduce ? false : { opacity: 0, scale: depth, filter: "brightness(0) saturate(0)" }}
                animate={
                  reduce
                    ? undefined
                    : show
                      ? { opacity: 1, scale: 1, filter: "brightness(1) saturate(1)" }
                      : undefined
                }
                transition={{
                  opacity: { duration: 0.6, delay },
                  scale: { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] },
                  filter: { duration: 1.2, delay: delay + 0.35 },
                }}
              >
                <Scene />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="poster-fade" aria-hidden="true" />
        <motion.div className="poster-shade" style={{ opacity: shade }} aria-hidden="true" />

        <motion.div className="hero-copy" style={{ opacity: copyOpacity, y: copyY }}>
          <h1 className="wordmark">
            <motion.span
              className="wordmark-line"
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={show ? { clipPath: "inset(0 0 0% 0)" } : undefined}
              transition={{ duration: 1.1, delay: reduce ? 0 : 2.0, ease }}
            >
              Shahzaib Rao
            </motion.span>
          </h1>

          <motion.p className="hero-tagline" {...fade(2.5)}>
            {profile.role}
          </motion.p>

          <motion.ul className="platforms" aria-label="Platforms" {...fade(2.65)}>
            <li>Web</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Cloud</li>
          </motion.ul>

          <motion.div className="hero-cta" {...fade(2.8)}>
            <Magnetic>
              <a href="#missions" className="btn btn-hot">
                <Crosshair size={18} /> Start mission
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resume} download className="btn btn-glass">
                <Download size={18} /> Download CV
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div className="hero-statement" style={{ opacity: stmtOpacity, scale: stmtScale }}>
          <span className="script">Multan, Pakistan</span>
          <p>
            5+ years
            <br />
            in the making.
          </p>
          <small>Building SaaS, fintech and real-time apps for teams in the UK, EU, US &amp; Australia.</small>
        </motion.div>

        <motion.a href="#missions" className="scroll-hint" style={{ opacity: hintOpacity }} aria-label="Scroll down">
          <ArrowDown size={16} /> Scroll
        </motion.a>
      </div>
    </section>
  );
}
