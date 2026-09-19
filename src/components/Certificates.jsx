import { useEffect, useState } from "react";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { certificates } from "../data.js";

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={cert.title} onClick={onClose}>
      <button className="icon-btn lightbox-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={cert.image} alt={`${cert.title} certificate`} />
        <figcaption>
          <span>
            {cert.title} · {cert.issuer}
          </span>
          <a href={cert.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Verify online <ArrowUpRight size={16} />
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading eyebrow="Certificates" title="Always learning">
          Courses in React and UX design — click a certificate to view it full size.
        </SectionHeading>

        <div className="certs">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="cert">
              <button
                className="cert-thumb"
                onClick={() => setActive(c)}
                aria-label={`View ${c.title} certificate`}
              >
                <img src={c.image} alt="" loading="lazy" />
                <span className="cert-zoom">
                  <Maximize2 size={18} />
                </span>
              </button>
              <div className="cert-info">
                <strong>{c.title}</strong>
                <span>{c.issuer}</span>
                <span className="cert-note">{c.note}</span>
                <a href={c.url} target="_blank" rel="noreferrer" className="cert-verify">
                  Verify <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
