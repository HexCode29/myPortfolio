import { GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { education, experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I’ve worked" />

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.06} className="timeline-item">
              <span className={`timeline-dot ${job.current ? "current" : ""}`} aria-hidden="true" />
              <div className="job-card">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">
                      {job.company}
                      {job.location && (
                        <span className="job-loc">
                          <MapPin size={13} /> {job.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="education">
          <h3>
            <GraduationCap size={20} /> Education
          </h3>
          <div className="edu-grid">
            {education.map((e) => (
              <div key={e.degree} className="edu-card">
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <span className="period">{e.period}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
