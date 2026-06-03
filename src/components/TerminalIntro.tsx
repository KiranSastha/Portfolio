import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { text: "> Initializing portfolio...", delay: 0 },
  { text: "> Loading Kiran S K...", delay: 600 },
  { text: "> Robotics Engineer | SLAM | Embedded Systems", delay: 1200 },
  { text: "> Status: Research Intern @ NIT Calicut", delay: 1800 },
  { text: "> Ready.", delay: 2400 },
];

// Module-level flag — resets on every page reload, persists during React re-renders
let introShown = false;

const TerminalIntro = ({ onDone }: { onDone: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // introShown is a module-level variable — resets on every page reload
    // but persists during React re-renders/remounts within the same load
    if (introShown) {
      onDone();
      return;
    }

    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === lines.length - 1) {
          setTimeout(() => {
            setDone(true);
            introShown = true;
            setTimeout(onDone, 600);
          }, 700);
        }
      }, line.delay);
    });
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#080808]"
        >
          {/* Background grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div
            className="relative w-full max-w-xl mx-6 rounded-xl border p-8"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 60px rgba(245,200,66,0.06)",
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
              <span className="ml-2 text-xs text-gray-600 uppercase tracking-widest">
                kiran@portfolio ~ terminal
              </span>
            </div>

            {/* Lines */}
            <div className="space-y-2 font-mono text-sm">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: i === lines.length - 1 ? "#9ae6b4" : i === 0 ? "#6b7280" : "#f0ece0",
                  }}
                >
                  {line.text}
                  {i === visibleLines[visibleLines.length - 1] && i !== lines.length - 1 && (
                    <span
                      className="inline-block w-2 h-4 ml-1 align-middle bg-yellow-400"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalIntro;
