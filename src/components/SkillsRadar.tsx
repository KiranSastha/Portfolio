import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

const skills = [
  { label: "Embedded Systems", value: 88 },
  { label: "Robotics & SLAM", value: 78 },
  { label: "Computer Vision", value: 82 },
  { label: "Control Systems", value: 75 },
  { label: "PLC & SCADA", value: 70 },
  { label: "Machine Learning", value: 72 },
];

// Expanded viewBox so labels don't get clipped
const SIZE = 280;
const VBOX = 360;       // wider viewBox with padding for labels
const CENTER = VBOX / 2;
const LEVELS = 5;
const MAX = 100;

const angleStep = (2 * Math.PI) / skills.length;

const polarToCart = (angle: number, radius: number) => ({
  x: CENTER + radius * Math.sin(angle),
  y: CENTER - radius * Math.cos(angle),
});

// Build a polygon points string from an array of radii (one per skill)
const buildPolygon = (radii: number[], maxRadius: number) =>
  skills
    .map((s, i) => {
      const r = (radii[i] / MAX) * maxRadius;
      const pt = polarToCart(i * angleStep, r);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");

const SkillsRadar = () => {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  // Per-skill animated radii (0 → actual value)
  const [radii, setRadii] = useState(skills.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  const maxRadius = CENTER - 48; // enough room for labels

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // When animated flips true, tween each radius from 0 to its target value
  useEffect(() => {
    if (!animated) return;
    skills.forEach((s, i) => {
      const start = Date.now();
      const duration = 900 + i * 60; // slight stagger
      const delay = 300;
      const tick = () => {
        const elapsed = Date.now() - start - delay;
        if (elapsed < 0) { requestAnimationFrame(tick); return; }
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setRadii((prev) => {
          const next = [...prev];
          next[i] = s.value * eased;
          return next;
        });
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, [animated]);

  // Grid polygons (static)
  const gridPolygons = Array.from({ length: LEVELS }, (_, lvl) => {
    const r = (maxRadius * (lvl + 1)) / LEVELS;
    return skills
      .map((_, i) => {
        const pt = polarToCart(i * angleStep, r);
        return `${pt.x},${pt.y}`;
      })
      .join(" ");
  });

  const dataPolygon = buildPolygon(radii, maxRadius);

  // Current data points for dot rendering
  const dataPoints = skills.map((s, i) => {
    const r = (radii[i] / MAX) * maxRadius;
    return polarToCart(i * angleStep, r);
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="text-xs uppercase tracking-widest text-gray-600 mb-6 self-start">
        Skills Radar
      </p>

      <div className="relative">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${VBOX} ${VBOX}`}
          style={{ overflow: "visible" }}
        >
          {/* Grid polygons */}
          {gridPolygons.map((pts, lvl) => (
            <polygon
              key={lvl}
              points={pts}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}

          {/* Axis lines */}
          {skills.map((_, i) => {
            const outer = polarToCart(i * angleStep, maxRadius);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={outer.x}
                y2={outer.y}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            );
          })}

          {/* Filled data polygon — points animate via JS, opacity via framer */}
          <motion.polygon
            points={dataPolygon}
            fill="rgba(245,200,66,0.12)"
            stroke="#f5c842"
            strokeWidth="1.5"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: animated ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ filter: "drop-shadow(0 0 6px rgba(245,200,66,0.3))" }}
          />

          {/* Data point dots */}
          {dataPoints.map((pt, i) => (
            <motion.circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={hovered === i ? 6 : 4}
              fill={hovered === i ? "#ffe066" : "#f5c842"}
              stroke="#080808"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: animated ? 1 : 0,
                scale: animated ? 1 : 0,
              }}
              transition={{ duration: 0.35, delay: 0.6 + i * 0.07 }}
              style={{
                cursor: "default",
                filter:
                  hovered === i
                    ? "drop-shadow(0 0 6px rgba(245,200,66,0.8))"
                    : "none",
                transformOrigin: `${pt.x}px ${pt.y}px`,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}

          {/* Labels */}
          {skills.map((s, i) => {
            const labelR = maxRadius + 28;
            const pt = polarToCart(i * angleStep, labelR);
            const isHov = hovered === i;
            return (
              <text
                key={i}
                x={pt.x}
                y={pt.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="0.08em"
                fill={isHov ? "#f5c842" : "#6b7280"}
                style={{ textTransform: "uppercase", transition: "fill 0.2s" }}
              >
                {s.label}
              </text>
            );
          })}

          {/* Center dot */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r="3"
            fill="rgba(245,200,66,0.3)"
          />
        </svg>

        {/* Hover tooltip — positioned near the hovered dot, not at center */}
        {hovered !== null && (() => {
          const pt = dataPoints[hovered];
          // Offset tooltip so it doesn't cover the dot; clamp inside SVG bounds
          const tipX = pt.x > CENTER ? pt.x - 60 : pt.x + 10;
          const tipY = pt.y > CENTER ? pt.y - 48 : pt.y + 8;
          // Convert SVG coords → pixel coords (SVG rendered at SIZE px, viewBox VBOX)
          const scale = SIZE / VBOX;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none absolute"
              style={{
                left: tipX * scale,
                top: tipY * scale,
              }}
            >
              <div
                className="px-2.5 py-1.5 rounded-lg text-center"
                style={{
                  background: "rgba(8,8,8,0.9)",
                  border: "1px solid rgba(245,200,66,0.25)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="text-base font-bold"
                  style={{ color: "#f5c842" }}
                >
                  {skills[hovered].value}%
                </div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest whitespace-nowrap">
                  {skills[hovered].label}
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </div>
  );
};

export default SkillsRadar;