import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}
