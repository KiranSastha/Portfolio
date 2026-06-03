import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [count, setCount] = useState(10);

  // Auto-redirect countdown
  useEffect(() => {
    if (count <= 0) {
      window.location.href = "/";
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-[7vw] overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,200,66,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold leading-none mb-6 select-none"
          style={{
            fontSize: "clamp(8rem, 20vw, 16rem)",
            color: "rgba(255,255,255,0.04)",
            fontFamily: "inherit",
            letterSpacing: "-0.05em",
          }}
        >
          404
        </motion.div>

        {/* Overlaid label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute flex flex-col items-center"
        >
          <span
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#f5c842" }}
          >
            -- Error 404
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
          >
            Page Not Found
          </h1>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Redirecting you back to the portfolio.
          </p>
        </motion.div>

      </div>

      {/* Bottom content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative z-10 flex flex-col items-center gap-6 mt-56"
      >
        {/* Countdown */}
        <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest">
          <div className="relative w-8 h-8">
            <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
              <circle
                cx="16" cy="16" r="13"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2"
              />
              <circle
                cx="16" cy="16" r="13"
                fill="none"
                stroke="#f5c842"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 13}`}
                strokeDashoffset={`${2 * Math.PI * 13 * (1 - count / 10)}`}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-xs font-medium"
              style={{ color: "#f5c842" }}
            >
              {count}
            </span>
          </div>
          <span>Redirecting in {count}s</span>
        </div>

        {/* CTA */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider bg-yellow-400 text-black transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,200,66,0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "none")
          }
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Portfolio
        </a>

        {/* Footer */}
        <p className="text-xs text-gray-700 mt-4">
          kiransk.me
        </p>
      </motion.div>

    </div>
  );
};

export default NotFound;