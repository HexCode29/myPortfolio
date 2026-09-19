import { Cloud, Layers, Smartphone, Zap } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { profile, skills } from "../data.js";

const pillars = [
  { icon: Layers, title: "Clean architecture", text: "Reusable components and maintainable services built to scale." },
  { icon: Zap, title: "Performance first", text: "Lazy loading, memoisation and optimised APIs for fast interfaces." },
  { icon: Smartphone, title: "Web & mobile", text: "React and React Native apps sharing one backend and one standard." },
  { icon: Cloud, title: "Production ready", text: "Secure auth, role-based access, serverless functions, real deployments." },
];

export default function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <SectionHeading eyebrow="About" title="Engineering with a product mindset">
            {profile.summary}
          </SectionHeading>

          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="pillar">
                <span className="pillar-icon">
                  <p.icon size={22} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="Tools I use to ship" />
          <div className="skills-grid">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={(i % 4) * 0.06} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
