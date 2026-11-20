import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import { experience } from "../data.js";

// Chronological order: the first job is mission 1, the current role is last.
const missions = [...experience].reverse();
const colors = ["#ff2e88", "#ffc145", "#a76bff"];

// Minimap geometry (300×300). The route follows the streets between markers.
const you = { x: 150, y: 240 };
const markers = [
  { x: 90, y: 176 },
  { x: 210, y: 116 },
  { x: 120, y: 62 },
];
const route = "M150 240 V176 H90 V116 H210 V62 H120";
const routeStops = [0, 124 / 448, 304 / 448, 1]; // share of the route reached at each mission

function Minimap({ active }) {
  const reduce = useReducedMotion();
  const streets = [30, 62, 90, 116, 150, 176, 210, 240, 270];

  return (
    <div className="minimap-wrap">
      <svg className="minimap" viewBox="0 0 300 300" role="img" aria-label="Career route map">
        <defs>
          <clipPath id="mm-clip">
            <circle cx="150" cy="150" r="146" />
          </clipPath>
          <filter id="mm-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g clipPath="url(#mm-clip)">
          <rect width="300" height="300" fill="#1a1428" />
          <path d="M0 0 H86 C 60 60, 40 90, 0 120 Z" fill="#163a5c" opacity="0.8" />
          {[
            [36, 36, 22, 20], [178, 30, 26, 26], [238, 70, 30, 40], [40, 200, 40, 30],
            [176, 190, 26, 40], [236, 200, 40, 36], [96, 124, 18, 46], [160, 80, 40, 30],
          ].map(([x, y, w, h]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="3" fill="#251d38" />
          ))}
          {streets.map((s) => (
            <g key={s} stroke="#3a3150" strokeWidth="5">
              <line x1="0" y1={s} x2="300" y2={s} />
              <line x1={s} y1="0" x2={s} y2="300" />
            </g>
          ))}
          <path d={route} stroke="#5b4a7a" strokeWidth="6" fill="none" strokeLinejoin="round" />
          <motion.path
            d={route}
            stroke="#c06bff"
            strokeWidth="6"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#mm-glow)"
            initial={false}
            animate={{ pathLength: routeStops[active + 1] }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
          {markers.map((m, i) => (
            <g key={i} transform={`translate(${m.x} ${m.y})`}>
              {i === active && !reduce && (
                <circle r="12" fill="none" stroke={colors[i]} strokeWidth="2" className="mm-ping" />
              )}
              <circle r="12" fill={colors[i]} stroke="#0d0815" strokeWidth="3" />
              <text y="4.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0d0815" fontFamily="Inter, sans-serif">
                {i + 1}
              </text>
            </g>
          ))}
          <g transform={`translate(${you.x} ${you.y})`}>
            <path d="M0 -12 L9 10 L0 5 L-9 10 Z" fill="#fff" stroke="#0d0815" strokeWidth="2" />
            <text y="26" textAnchor="middle" fontSize="9" fill="#cfc6e6" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
              YOU
            </text>
          </g>
        </g>
        <circle cx="150" cy="150" r="146" fill="none" stroke="#000" strokeWidth="6" />
      </svg>
      <div className="hud-bars" aria-hidden="true">
        <span className="bar-health" />
        <span className="bar-armor" />
      </div>
    </div>
  );
}

function Mission({ m, i, active, onActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(i);
  }, [inView, i, onActive]);

  const done = !m.current;

  return (
    <motion.li
      ref={ref}
      className={`mission ${active ? "is-active" : ""}`}
      style={{ "--mc": colors[i] }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="mission-num" onClick={() => onActive(i)} aria-label={`Show mission ${i + 1} on the map`}>
        {i + 1}
      </button>
      <div className="mission-body">
        <div className="mission-head">
          <span className={`mission-status ${done ? "done" : "live"}`}>
            {done ? (
              <>
                <Check size={13} /> Completed
              </>
            ) : (
              <>
                <span className="live-dot" /> In progress
              </>
            )}
          </span>
          <span className="mission-period">{m.period}</span>
        </div>
        <h3>{m.role}</h3>
        <p className="mission-company">
          {m.company}
          {m.location && (
            <span>
              <MapPin size={14} /> {m.location}
            </span>
          )}
        </p>
        <ul className="mission-points">
          {m.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

export default function Missions() {
  const [active, setActive] = useState(0);

  return (
    <section id="missions" className="section missions">
      <div className="container missions-grid">
        <div className="missions-map">
          <div className="missions-sticky">
            <Minimap active={active} />
            <p className="hud-text">
              Mission {active + 1}/{missions.length} · {missions[active].company}
            </p>
          </div>
        </div>
        <div>
          <span className="kicker">Career route</span>
          <h2 className="title-xl">Missions</h2>
          <p className="lead">Every role so far, in order: two missions complete, one still live.</p>
          <ol className="mission-list">
            {missions.map((m, i) => (
              <Mission key={m.company} m={m} i={i} active={i === active} onActive={setActive} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
