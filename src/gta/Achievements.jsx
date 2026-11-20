import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Trophy, X } from "lucide-react";
import { certificates, education } from "../data.js";
import { lockScroll } from "../lib/scroll.js";

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    lockScroll(true);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="lightbox" data-lenis-prevent role="dialog" aria-modal="true" aria-label={cert.title} onClick={onClose}>
      <button className="icon-btn lightbox-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={cert.image} alt={`${cert.title} certificate`} />
        <figcaption>
          <span>
            {cert.title} · {cert.issuer}
          </span>
          <a href={cert.url} target="_blank" rel="noreferrer" className="btn btn-hot btn-sm">
            Verify online <ArrowUpRight size={16} />
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default function Achievements() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="section achievements">
      <div className="container">
        <span className="kicker">Achievements</span>
        <h2 className="title-xl">Unlocked</h2>

        <ul className="trophies">
          {certificates.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="trophy" data-cursor="view" onClick={() => setActive(c)}>
                <span className="trophy-thumb">
                  <img src={c.image} alt="" loading="lazy" />
                </span>
                <span className="trophy-text">
                  <small>
                    <Trophy size={13} /> Achievement unlocked
                  </small>
                  <strong>{c.title}</strong>
                  <span>
                    {c.issuer} · {c.note}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="edu">
          {education.map((e) => (
            <div key={e.degree} className="edu-item">
              <GraduationCap size={20} />
              <strong>{e.degree}</strong>
              <span>
                {e.school} · {e.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
