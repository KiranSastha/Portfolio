import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
{
  title: "Waste Segregation System",
  description:
    "An embedded-system-based automated waste segregation system that classifies waste using multi-sensor fusion and directs it into appropriate categories in real time.",
  problem:
    "Over 70% of urban waste is mixed at source, making recycling inefficient, increasing landfill load, and causing environmental pollution.",
  solution:
    "Developing an automated system using ultrasonic, gas, and load sensors to identify waste type (wet, dry, hazardous). A servo-driven mechanism directs waste into specific bins, followed by odor control using an exhaust fan. System provides real-time feedback via LEDs and display.",
  role:
    "Designed complete system architecture, integrated multi-sensor decision logic, developed actuator control (servo + fan), and implemented user interaction (LED indicators, display, push-button reset).",
  tech: [
    "Embedded Systems (Arduino)",
    "Sensor Fusion (Ultrasonic, Gas, Load Cell)",
    "Servo Motor Control",
    "Automation Logic",
    "IoT-ready Architecture"
  ],
  highlights: [
    "Multi-sensor classification: distance + gas + weight for improved accuracy",
    "Automated sorting using servo-based directional control (~180° rotation)",
    "Real-time feedback system: LEDs (Idle, Processing, Reset) + display output",
    "Odor control using automated fan activation post-segregation",
    "Push-button reset mechanism for continuous operation",
    "Designed for compact household deployment (<40cm system size)"
  ],
  status: "Ongoing",
  github: "https://github.com/KiranSastha/Waste-Segregation-Bot",
  image: "/images/waste.jpg"
  },

  {
  title: "iAttend - Semi Autonomous Attendance Tracking System",
  description:
    "A real-time facial recognition-based attendance system with automated detection pipeline and admin dashboard for monitoring and analytics.",
  problem:
    "Manual attendance systems consume 10–15 minutes per class, are prone to proxy entries, and lack centralized tracking across departments.",
  solution:
    "Built a semi-autonomous system using OpenCV that performs face detection, feature extraction, and recognition in real-time (~1–2 seconds per person). Integrated a web-based admin dashboard displaying attendance statistics, logs, and multi-department tracking.",
  role:
    "Designed the end-to-end system, implemented the facial recognition pipeline (capture → processing → matching), and developed the admin dashboard UI with real-time updates.",
  tech: [
    "OpenCV",
    "Computer Vision",
    "Python",
    "Face Recognition Algorithms",
    "Web Dashboard (Frontend + Backend)"
  ],
  highlights: [
    "Real-time face detection and matching with ~85–95% accuracy (controlled lighting)",
    "Processing pipeline: Capture → Feature Extraction → Match (~1–2 sec latency)",
    "Automated logging reduces attendance time by ~80%",
    "Dashboard supports 100+ students with attendance analytics",
    "Includes status tracking: Capturing, Processing, Match Found"
  ],
  status: "Ongoing",
  github: "https://github.com/KiranSastha/face-recognition-attendance-system",
  image: "/images/iattend.jpg"
  },

  {
  title: "Smart Fertilizer System",
  description:
    "An intelligent mobile robot with a robotic arm that uses machine learning and sensor data to optimize and automate fertilizer application in precision agriculture.",
  problem:
    "Over 50% of fertilizer usage is inefficient due to lack of precision, leading to soil degradation, increased costs, and environmental damage.",
  solution:
    "Developed a wheeled robotic platform equipped with a multi-DOF robotic arm for targeted fertilizer dispensing. Integrated sensor inputs (soil conditions) with a machine learning model to predict optimal fertilizer quantity and apply it precisely at specific locations.",
  role:
    "Designed the robotic platform and arm mechanism, handled system integration (embedded + ML), and contributed to data processing and fertilizer prediction logic.",
  tech: [
    "Machine Learning",
    "IoT",
    "Embedded Systems (Arduino/Raspberry Pi)",
    "Robotic Arm (Servo-based)",
    "Automation & Control Systems"
  ],
  highlights: [
    "Mobile robot with 4-wheel drive for field navigation",
    "Robotic arm with ~3–4 DOF for precise fertilizer placement",
    "ML-based prediction system for optimized fertilizer usage",
    "Targeted application reduces fertilizer waste by ~20–30% (prototype estimate)",
    "Onboard electronics + control unit integrated into compact chassis",
    "Scalable for smart farming and precision agriculture use-cases"
  ],
  image: "/images/fertilizer.jpg"
  },

  {
  title: "Solar Panel Alignment System",
  description:
    "A semi-automated solar tracking system using a fluid-actuated mechanism and gear-driven rotation to improve solar energy capture efficiency.",
  problem:
    "Fixed solar panels lose up to 30–40% efficiency due to improper alignment with the sun throughout the day.",
  solution:
    "Developed a 1-axis solar tracking system using a DC water pump and hydraulic tubing to create controlled motion, coupled with a gear mechanism for panel rotation up to ~90°. The system adjusts panel orientation based on sunlight direction.",
  role:
    "Designed and fabricated the complete mechanical setup, integrated pump-driven actuation system, and assembled the control circuitry.",
  tech: [
    "Hydraulics (fluid actuation)",
    "Mechanical Design",
    "Gear Mechanism",
    "DC Pump System",
    "Embedded Control"
  ],
  highlights: [
    "Achieved ~20–25% improvement in solar exposure efficiency (prototype level)",
    "1-axis rotation with ~90° tilt capability",
    "Powered using dual 3.7V Li-ion batteries (7.4V system)",
    "Low-cost prototype under ₹1500",
    "Compact design (~30cm x 25cm base)"
  ],
  image: "/images/solar.jpg"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // 🔥 ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="work" className="px-6 md:px-20 py-24 bg-black text-white">
      
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Recent <span className="italic text-yellow-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          A selection of projects showcasing my skills in robotics, automation,
          and intelligent systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            onClick={() => setSelectedProject(p)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer border border-gray-800 p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>

            <p className="text-gray-400 mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.status && (
              <p className="text-yellow-400 text-sm mb-3">{p.status}</p>
            )}

            {/* CTA */}
            <div className="text-sm text-yellow-400 font-medium flex items-center gap-2 group-hover:translate-x-1 transition">
              View Details →
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl p-6 relative border border-gray-700 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-white text-xl hover:text-yellow-400"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-yellow-400">
            {selectedProject.title}
          </h2>

          {selectedProject.status && (
            <span className="inline-block mt-2 text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">
              {selectedProject.status}
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT → IMAGE */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT → CONTENT */}
          <div className="space-y-4">

            <div>
              <h3 className="text-sm text-yellow-400 mb-1">Problem</h3>
              <p className="text-gray-300 text-sm">
                {selectedProject.problem}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-yellow-400 mb-1">Solution</h3>
              <p className="text-gray-300 text-sm">
                {selectedProject.solution}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-yellow-400 mb-1">My Role</h3>
              <p className="text-gray-300 text-sm">
                {selectedProject.role}
              </p>
            </div>

            {/* 🔥 Highlights */}
            {selectedProject.highlights && (
              <div>
                <h3 className="text-sm text-yellow-400 mb-2">
                  Key Highlights
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {selectedProject.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-400">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech */}
            <div>
              <h3 className="text-sm text-yellow-400 mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔥 ACTION BUTTONS */}
            <div className="flex gap-4 mt-6">

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
                >
                  GitHub ↗
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition"
                >
                  Live Demo 🚀
                </a>
              )}

            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Projects;