import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Gavel, Globe, HeartPulse, Users, Wallet, Workflow } from "lucide-react";
import { projects } from "../data.js";

const icons = { gavel: Gavel, workflow: Workflow, users: Users, wallet: Wallet, heart: HeartPulse, globe: Globe };

function Card({ p, i }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 160, damping: 18 });
  const Icon = icons[p.icon] || Globe;

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x);
    my.set(y);
    ref.current.style.setProperty("--gx", `${x * 100}%`);
    ref.current.style.setProperty("--gy", `${y * 100}%`);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      className={`job ${p.featured ? "job-wide" : ""}`}
      style={{ "--h": p.hue, rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="job-art" aria-hidden="true">
        <Icon className="job-icon" strokeWidth={1.2} />
        <span className="job-sun" />
      </div>
      <div className="job-glare" aria-hidden="true" />
      <div className="job-body">
        <div className="job-top">
          <span className="job-tag">{p.tag}</span>
          <span className="job-num">#{String(i + 1).padStart(2, "0")}</span>
        </div>
        <span className="script job-meta">{p.meta}</span>
        <h3 className="job-name">{p.name}</h3>
        <p className="job-tagline">{p.tagline}</p>
        <p className="job-desc">{p.description}</p>
        {p.points && (
          <ul className="job-points">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
        <ul className="chips chips-sm">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {p.url && (
          <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-glass btn-sm job-link">
            Visit site <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="kicker">Completed jobs</span>
        <h2 className="title-xl">Hot properties</h2>
        <p className="lead">Live products shipped for clients around the world, plus one I own.</p>
        <div className="jobs">
          {projects.map((p, i) => (
            <Card key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
