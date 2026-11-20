import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "../components/CountUp.jsx";
import { skills, stats } from "../data.js";

const short = {
  "Payments & APIs": "Payments",
  "DevOps & Tools": "DevOps",
};

const C = 200;
const R_OUT = 190;
const R_IN = 96;

const polar = (r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
};

const segment = (start, end) => {
  const [x1, y1] = polar(R_OUT, start);
  const [x2, y2] = polar(R_OUT, end);
  const [x3, y3] = polar(R_IN, end);
  const [x4, y4] = polar(R_IN, start);
  return `M${x1} ${y1} A${R_OUT} ${R_OUT} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${R_IN} ${R_IN} 0 0 0 ${x4} ${y4} Z`;
};

// Radial "loadout" wheel: hover, focus or tap a slice to equip a skill group.
function SkillWheel({ active, setActive }) {
  const step = 360 / skills.length;
  const gap = 1.6;

  return (
    <svg className="wheel" viewBox="0 0 400 400" role="group" aria-label="Skill wheel">
      <circle cx={C} cy={C} r={R_OUT + 6} fill="rgba(10,6,18,0.6)" />
      {skills.map((s, i) => {
        const start = i * step - step / 2 + gap;
        const end = i * step + step / 2 - gap;
        const [lx, ly] = polar((R_OUT + R_IN) / 2, i * step);
        const on = i === active;
        return (
          <g
            key={s.title}
            className={`wheel-slice ${on ? "is-on" : ""}`}
            role="button"
            tabIndex={0}
            aria-pressed={on}
            aria-label={s.title}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(i))}
          >
            <path d={segment(start, end)} />
            <text x={lx} y={ly + 5} textAnchor="middle">
              {short[s.title] || s.title}
            </text>
          </g>
        );
      })}
      <circle cx={C} cy={C} r={R_IN - 8} className="wheel-core" />
      <text x={C} y={C - 6} textAnchor="middle" className="wheel-count">
        {skills[active].items.length}
      </text>
      <text x={C} y={C + 18} textAnchor="middle" className="wheel-count-label">
        TOOLS
      </text>
    </svg>
  );
}

export default function Arsenal() {
  const [active, setActive] = useState(0);
  const s = skills[active];

  return (
    <section id="skills" className="section arsenal">
      <div className="container">
        <span className="kicker">Player stats</span>
        <h2 className="title-xl">The arsenal</h2>

        <ul className="hud-stats">
          {stats.map((st, i) => (
            <motion.li
              key={st.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <strong className={`hud-num hud-num-${i}`}>
                <CountUp to={st.to} suffix={st.suffix} />
              </strong>
              <span>{st.label}</span>
            </motion.li>
          ))}
        </ul>

        <div className="arsenal-grid">
          <SkillWheel active={active} setActive={setActive} />
          <div className="loadout" aria-live="polite">
            <span className="loadout-label">Equipped</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3>{s.title}</h3>
                <ul className="chips">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            <p className="loadout-hint">Hover or tap the wheel to switch loadout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
