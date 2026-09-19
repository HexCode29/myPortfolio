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

function ProjectCard({ project, index }) {
  const Icon = icons[project.icon];
  return (
    <Reveal
      delay={(index % 2) * 0.08}
      className={`project ${project.featured ? "project-featured" : ""} ${project.reverse ? "project-reverse" : ""}`}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="project-link"
        style={{ "--hue": project.hue }}
        aria-label={`${project.name} — open site in a new tab`}
      >
        <div className="project-cover" aria-hidden="true">
          <Icon className="project-cover-icon" strokeWidth={1.25} />
          <span className="project-cover-name">{project.name}</span>
        </div>

        <div className="project-body">
          <div className="project-top">
            <span className="chip chip-tag">{project.tag}</span>
            <span className="project-meta">{project.meta}</span>
          </div>
          <h3>
            {project.name}
            <ArrowUpRight className="arrow" size={20} />
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Selected work">
          Products I’ve built and shipped for clients around the world — from auction platforms and
          fintech dashboards to healthcare, community apps and my own CRM.
        </SectionHeading>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
