import { useId } from "react";

// Original "SR" badge in the sunset palette, used by the loader, hero and nav.
export default function Monogram({ size = 96, className = "" }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className={`monogram ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="SR"
    >
      <defs>
        <linearGradient id={`mg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd66b" />
          <stop offset="0.45" stopColor="#ff7a3d" />
          <stop offset="1" stopColor="#ff2e88" />
        </linearGradient>
        <linearGradient id={`ms-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="26" fill={`url(#mg-${id})`} />
      <rect x="6" y="6" width="108" height="108" rx="26" fill={`url(#ms-${id})`} />
      <text
        x="60"
        y="84"
        textAnchor="middle"
        fontFamily="Anton, Impact, sans-serif"
        fontSize="66"
        letterSpacing="-1"
        fill="#16061f"
      >
        SR
      </text>
    </svg>
  );
}
