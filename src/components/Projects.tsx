import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Waste Segregation System",
    tag: "Embedded & IoT",
    description:
      "Automated waste classification using multi-sensor fusion — separating biodegradable, recyclable, and hazardous waste in real time.",
    problem:
      "Over 70% of urban waste is mixed at source, making recycling inefficient, increasing landfill load, and causing environmental pollution.",
    solution:
      "Automated system using ultrasonic, gas, and load sensors to identify waste type. A servo-driven mechanism directs waste into specific bins, followed by odor control via exhaust fan. Real-time feedback via LEDs and display.",
    role:
      "Designed complete system architecture, integrated multi-sensor decision logic, developed actuator control (servo + fan), and implemented user interaction (LED indicators, display, push-button reset).",
    tech: ["Arduino", "Sensor Fusion", "Servo Control", "Automation Logic", "IoT-ready"],
    highlights: [
      "Multi-sensor classification: distance + gas + weight for improved accuracy",
      "Automated sorting using servo-based directional control (~180° rotation)",
      "Real-time feedback: LEDs (Idle, Processing, Reset) + display output",
      "Odor control using automated fan activation post-segregation",
      "Push-button reset for continuous operation",
      "Designed for compact household deployment (<40cm system size)",
    ],
    status: "Ongoing",
    github: "https://github.com/KiranSastha/Waste-Segregation-Bot",
    image: "/images/waste.jpg",
  },
  {
    title: "iAttend",
    tag: "Computer Vision",
    description:
      "Semi-autonomous facial recognition attendance system with real-time detection pipeline and admin dashboard for analytics.",
    problem:
      "Manual attendance systems consume 10–15 minutes per class, are prone to proxy entries, and lack centralized tracking.",
    solution:
      "Built using OpenCV for face detection, feature extraction, and recognition in real time (~1–2 sec). Integrated web-based admin dashboard with attendance stats, logs, and multi-department tracking.",
    role:
      "Designed end-to-end system, implemented the recognition pipeline (capture → processing → matching), and developed the admin dashboard UI with real-time updates.",
    tech: ["OpenCV", "Python", "Face Recognition", "Web Dashboard"],
    highlights: [
      "Real-time detection with ~85–95% accuracy in controlled lighting",
      "Processing pipeline: Capture → Extract → Match (~1–2 sec latency)",
      "Automated logging reduces attendance time by ~80%",
      "Dashboard supports 100+ students with attendance analytics",
      "Status indicators: Capturing, Processing, Match Found",
    ],
    status: "Ongoing",
    github: "https://github.com/KiranSastha/face-recognition-attendance-system",
    image: "/images/iattend.jpg",
  },
  {
    title: "Smart Fertilizer System",
    tag: "Robotics & ML",
    description:
      "Mobile robot with robotic arm that uses ML and sensor data to automate precision fertilizer application in agriculture.",
    problem:
      "Over 50% of fertilizer usage is inefficient due to lack of precision, leading to soil degradation and environmental damage.",
    solution:
      "Wheeled robotic platform with multi-DOF arm for targeted dispensing. ML model predicts optimal fertilizer quantity from soil sensor inputs and applies it at specific field locations.",
    role:
      "Designed robotic platform and arm mechanism, handled embedded + ML integration, and contributed to fertilizer prediction logic.",
    tech: ["Machine Learning", "IoT", "Arduino", "Robotic Arm", "Automation"],
    highlights: [
      "4-wheel drive mobile robot for field navigation",
      "Robotic arm with ~3–4 DOF for precise fertilizer placement",
      "ML-based prediction for optimized fertilizer usage",
      "Reduces fertilizer waste by ~20–30% (prototype estimate)",
      "Scalable for smart farming and precision agriculture",
    ],
    image: "/images/fertilizer.jpg",
  },
  {
    title: "Solar Panel Alignment",
    tag: "Mechanical & Control",
    description:
      "Semi-automated 1-axis solar tracking system using hydraulic actuation and gear mechanism to maximize energy capture.",
    problem:
      "Fixed solar panels lose up to 30–40% efficiency due to improper alignment with the sun throughout the day.",
    solution:
      "DC pump + hydraulic tubing creates controlled motion; gear mechanism enables ~90° panel rotation. Adjusts orientation based on sunlight direction.",
    role:
      "Designed and fabricated complete mechanical setup, integrated pump-driven actuation, and assembled control circuitry.",
    tech: ["Hydraulics", "Mechanical Design", "Gear Mechanism", "DC Pump", "Embedded Control"],
    highlights: [
      "~20–25% improvement in solar exposure (prototype level)",
      "1-axis rotation with ~90° tilt capability",
      "Powered by dual 3.7V Li-ion batteries (7.4V system)",
      "Low-cost prototype under ₹1500",
      "Compact design (~30cm × 25cm base)",
    ],
    image: "/images/solar.jpg",
  },
];

type Project = typeof projects[0];

const tagColors: Record<string, string> = {
  "Embedded & IoT": "rgba(245,200,66,0.1)",
  "Computer Vision": "rgba(99,179,237,0.1)",
  "Robotics & ML": "rgba(154,230,180,0.1)",
  "Mechanical & Control": "rgba(252,129,74,0.1)",
};
const tagText: Record<string, string> = {
  "Embedded & IoT": "#f5c842",
  "Computer Vision": "#63b3ed",
  "Robotics & ML": "#9ae6b4",
  "Mechanical & Control": "#fc814a",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="work" className="relative px-[7vw] py-32 bg-[#080808] text-white overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 right-[-100px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(250,200,50,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "#f5c842" }}
        >
          — Projects
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
          >
            Recent{" "}
            <span className="italic text-yellow-400">Projects</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            Hardware meets intelligence — a selection of builds across robotics,
            automation, and embedded systems.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-xl p-7 border flex flex-col justify-between transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,200,66,0.25)";
                e.currentTarget.style.background = "rgba(245,200,66,0.03)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(245,200,66,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top row */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background: tagColors[p.tag] ?? "rgba(245,200,66,0.08)",
                      color: tagText[p.tag] ?? "#f5c842",
                      border: `1px solid ${tagText[p.tag] ?? "#f5c842"}22`,
                    }}
                  >
                    {p.tag}
                  </span>
                  {p.status && (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {p.status}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#f0ece0" }}
                >
                  {p.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "#6b7280",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "#6b7280",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      +{p.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-2 mt-7 text-xs uppercase tracking-widest transition-all duration-300 group-hover:gap-3"
                style={{ color: "#f5c842" }}
              >
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl border"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(8,8,8,0.95) 60%)",
                backdropFilter: "blur(24px)",
                borderColor: "rgba(255,255,255,0.09)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border text-gray-500 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-200 z-10"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        background: tagColors[selectedProject.tag] ?? "rgba(245,200,66,0.08)",
                        color: tagText[selectedProject.tag] ?? "#f5c842",
                        border: `1px solid ${tagText[selectedProject.tag] ?? "#f5c842"}22`,
                      }}
                    >
                      {selectedProject.tag}
                    </span>
                    {selectedProject.status && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        {selectedProject.status}
                      </span>
                    )}
                  </div>
                  <h2
                    className="text-3xl font-bold"
                    style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xl">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Project Image */}
                {selectedProject.image && (
                  <div
                    className="mb-8 rounded-xl overflow-hidden border"
                    style={{ borderColor: "rgba(255,255,255,0.07)", maxHeight: "260px" }}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      style={{ maxHeight: "260px" }}
                    />
                  </div>
                )}

                {/* Divider */}
                <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />

                <div className="grid md:grid-cols-2 gap-8">

                  {/* LEFT */}
                  <div className="space-y-6">
                    {[
                      { label: "Problem", content: selectedProject.problem },
                      { label: "Solution", content: selectedProject.solution },
                      { label: "My Role", content: selectedProject.role },
                    ].map(({ label, content }) => content && (
                      <div key={label}>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#f5c842" }}>
                          {label}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">{content}</p>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-6">
                    {/* Highlights */}
                    {selectedProject.highlights && (
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                          Key Highlights
                        </p>
                        <ul className="space-y-2">
                          {selectedProject.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                              <span className="mt-2 w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-md"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              color: "#9ca3af",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    {selectedProject.github && (
                      <div className="pt-2">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 hover:-translate-y-0.5"
                          style={{ borderColor: "rgba(245,200,66,0.4)", color: "#f5c842" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#f5c842";
                            e.currentTarget.style.color = "#000";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,200,66,0.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#f5c842";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245,200,66,0.6); }
          50% { transform: scale(1.4); box-shadow: 0 0 0 5px rgba(245,200,66,0); }
        }
        .dot-breathe { animation: breathe 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Projects;