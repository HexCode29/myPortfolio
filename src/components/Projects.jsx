import { createRef, useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Gavel, Globe, HeartPulse, Users, Wallet, Workflow } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data.js";

const icons = {
  gavel: Gavel,
  users: Users,
  wallet: Wallet,
  heart: HeartPulse,
  globe: Globe,
  workflow: Workflow,
};

// Must match the sticky-stack media query in styles.css.
const STACK_QUERY = "(min-width: 1025px) and (min-height: 620px)";
// Sticky `top` of the first card (nav + gap) and the step between cards, in px.
const STICK_TOP = 88;
const STICK_STEP = 16;

function useStacked() {
  const [stacked, setStacked] = useState(() => window.matchMedia(STACK_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY);
    const on = () => setStacked(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return stacked;
}

function ProjectCard({ project, index, total, selfRef, nextRef, stacked }) {
  const Icon = icons[project.icon];
  const isLast = index === total - 1;

  // As the next card slides over this one, this card shrinks and dims.
  const { scrollYProgress } = useScroll({
    target: nextRef ?? selfRef,
    offset: ["start end", `start ${STICK_TOP + STICK_STEP * (index + 1)}px`],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.5]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div
      className={`project ${project.featured ? "project-featured" : ""}`}
      ref={selfRef}
      style={{ "--i": index }}
    >
      <motion.div className="project-scale" style={stacked ? { scale, filter } : undefined}>
        <Reveal className="project-reveal">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            data-cursor="view"
            style={{ "--hue": project.hue }}
            aria-label={`${project.name} — open site in a new tab`}
          >
            <div className="project-cover" aria-hidden="true">
              <Icon className="project-cover-icon" strokeWidth={1.25} />
              <span className="project-cover-name">{project.name}</span>
            </div>

            <div className="project-body">
              <div className="project-top">
                <span className="project-num">
                  {String(index + 1).padStart(2, "0")}
                  <small> / {String(total).padStart(2, "0")}</small>
                </span>
                <span className="chip chip-tag">{project.tag}</span>
                <span className="project-meta">{project.meta}</span>
              </div>
              <h3>
                {project.name}
                <ArrowUpRight className="arrow" size={22} />
              </h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              {project.points && (
                <ul className="project-points">
                  {project.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}

              <ul className="chips">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </Reveal>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const stacked = useStacked();
  const refs = useMemo(() => projects.map(() => createRef()), []);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Selected work" em="work">
          Products I’ve built and shipped for clients around the world — from auction platforms and
          fintech dashboards to healthcare, community apps and my own CRM.
        </SectionHeading>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.name}
              project={p}
              index={i}
              total={projects.length}
              selfRef={refs[i]}
              nextRef={refs[i + 1]}
              stacked={stacked}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
