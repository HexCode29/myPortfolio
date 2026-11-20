// Original illustrated panels for the hero "poster" collage. Pure SVG / CSS so
// they are crisp, tiny and need no third-party artwork.

const Palm = ({ x, y, s = 1, flip = false }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
    <path d="M0 0 C 6 -60, 4 -120, 22 -180" stroke="#12051c" strokeWidth="7" fill="none" strokeLinecap="round" />
    {[
      "M22 -180 Q 60 -200 92 -168",
      "M22 -180 Q 64 -176 84 -136",
      "M22 -180 Q 40 -150 44 -112",
      "M22 -180 Q -18 -200 -52 -170",
      "M22 -180 Q -14 -170 -34 -132",
      "M22 -180 Q 30 -220 64 -226",
      "M22 -180 Q 0 -222 -28 -222",
    ].map((d) => (
      <path key={d} d={d} stroke="#12051c" strokeWidth="9" fill="none" strokeLinecap="round" />
    ))}
  </g>
);

export function SunsetScene() {
  const stripes = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="scn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a0b45" />
          <stop offset="0.45" stopColor="#c21d7a" />
          <stop offset="0.72" stopColor="#ff7a3d" />
          <stop offset="0.82" stopColor="#ffc56b" />
        </linearGradient>
        <linearGradient id="scn-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1a8" />
          <stop offset="1" stopColor="#ff4f8b" />
        </linearGradient>
        <linearGradient id="scn-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b1a6e" />
          <stop offset="1" stopColor="#14061f" />
        </linearGradient>
        <mask id="scn-sunMask">
          <rect width="400" height="300" fill="#fff" />
          {stripes.map((i) => (
            <rect key={i} x="0" y={176 + i * 9} width="400" height={2 + i * 0.9} fill="#000" />
          ))}
        </mask>
      </defs>
      <rect width="400" height="300" fill="url(#scn-sky)" />
      <circle cx="210" cy="200" r="74" fill="url(#scn-sun)" mask="url(#scn-sunMask)" />
      <rect y="228" width="400" height="72" fill="url(#scn-sea)" />
      {[236, 246, 258, 272, 288].map((y, i) => (
        <rect key={y} x={150 - i * 12} y={y} width={120 + i * 24} height="2" fill="#ffb36b" opacity={0.7 - i * 0.12} />
      ))}
      <Palm x={70} y={262} s={1.05} />
      <Palm x={120} y={270} s={0.7} flip />
      <Palm x={350} y={268} s={0.9} flip />
    </svg>
  );
}

// Deterministic skyline so it renders the same every time.
const buildings = Array.from({ length: 16 }, (_, i) => {
  const r = (n) => ((Math.sin(i * 91.7 + n * 13.3) + 1) / 2);
  const w = 18 + r(1) * 26;
  const h = 70 + r(2) * 150;
  return { w, h };
});

export function SkylineScene() {
  let x = -6;
  return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="scn-night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b0620" />
          <stop offset="0.7" stopColor="#3b0f5c" />
          <stop offset="1" stopColor="#ff2e88" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#scn-night)" />
      <circle cx="220" cy="80" r="26" fill="#ffe7b0" opacity="0.9" />
      {buildings.map((b, i) => {
        const bx = x;
        x += b.w + 2;
        const top = 400 - b.h;
        const cols = Math.floor((b.w - 6) / 7);
        const rows = Math.floor((b.h - 12) / 11);
        return (
          <g key={i}>
            <rect x={bx} y={top} width={b.w} height={b.h} fill="#10061d" />
            {Array.from({ length: rows * cols }, (_, k) => {
              const lit = Math.sin(i * 7.1 + k * 3.7) > 0.35;
              if (!lit) return null;
              const cx = bx + 4 + (k % cols) * 7;
              const cy = top + 8 + Math.floor(k / cols) * 11;
              return <rect key={k} x={cx} y={cy} width="3" height="5" fill={k % 5 ? "#ffcf7a" : "#ff6fb1"} />;
            })}
          </g>
        );
      })}
      <rect y="394" width="300" height="6" fill="#ff2e88" />
    </svg>
  );
}

export function CodeScene() {
  return (
    <div className="scene-code" aria-hidden="true">
      <div className="scene-code-bar">
        <i /> <i /> <i /> <span>mission.tsx</span>
      </div>
      <pre>
        <span className="k">const</span> <span className="v">dev</span> = {"{"}
        {"\n  "}name: <span className="s">"Shahzaib Rao"</span>,
        {"\n  "}stack: [<span className="s">"React"</span>, <span className="s">"Node"</span>],
        {"\n  "}years: <span className="n">5</span>,
        {"\n  "}status: <span className="s">"available"</span>,
        {"\n"}{"};"}
        {"\n\n"}
        <span className="k">await</span> <span className="f">ship</span>(dev)<span className="caret" />
      </pre>
    </div>
  );
}

export function PhoneScene() {
  return (
    <div className="scene-phone" aria-hidden="true">
      <div className="phone-mini">
        <div className="phone-mini-notch" />
        <div className="note">
          <b>Client · London</b>
          <span>Can you start Monday?</span>
        </div>
        <div className="note">
          <b>Stripe</b>
          <span>Payout sent ✓</span>
        </div>
        <div className="note">
          <b>Deploy</b>
          <span>Production is live 🚀</span>
        </div>
      </div>
    </div>
  );
}

export function NeonScene() {
  return (
    <div className="scene-neon" aria-hidden="true">
      <span className="neon-pink">Ship it</span>
      <span className="neon-teal">open 24/7</span>
    </div>
  );
}

export function WantedScene() {
  return (
    <div className="scene-wanted" aria-hidden="true">
      <span className="wanted-stars">★★★★★</span>
      <strong>5+</strong>
      <span className="wanted-label">Years on the job</span>
    </div>
  );
}
