import Reveal from "./Reveal.jsx";
import SplitReveal from "./SplitReveal.jsx";

export default function SectionHeading({ eyebrow, title, em, children }) {
  return (
    <div className="section-heading">
      <Reveal y={12}>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <h2>
        <SplitReveal text={title} highlight={em ? [em] : []} />
      </h2>
      {children && (
        <Reveal delay={0.15} y={16}>
          <p>{children}</p>
        </Reveal>
      )}
    </div>
  );
}
