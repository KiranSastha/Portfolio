import { motion } from "framer-motion";
import SkillsRadar from "./SkillsRadar";
import TechIcons from "./TechIcons";

const timelineData = [
  {
    year: "2023 -- Present",
    title: "B.E. Mechatronics Engineering",
    place: "Paavai Engineering College, Namakkal",
    details: [
      "Currently pursuing with 7.54 CGPA",
      "Core focus: Robotics, Embedded Systems, Automation, Control Systems",
      "Hands-on project work involving microcontrollers, sensors, actuators, and hardware-software integration",
    ],
    active: true,
  },
  {
    year: "2021 -- 2023",
    title: "Higher Secondary Certificate (HSC)",
    place: "N.V.K.S Higher Secondary School, Attoor",
    details: [
      "Completed with 74.8%",
      "Developed strong interest in robotics and intelligent systems",
    ],
    active: false,
  },
  {
    year: "2020 -- 2021",
    title: "Secondary School Leaving Certificate (SSLC)",
    place: "N.V.K.S Senior Secondary School, Attoor",
    details: ["Completed with 72%"],
    active: false,
  },
];

const skills = [
  { label: "Embedded Systems", sub: "Arduino, ESP32, GPIO, UART, I2C, SPI", icon: "⚡", color: "#f5c842" },
  { label: "Robotics & SLAM", sub: "ROS2, Gazebo, Navigation, Perception", icon: "⚙️", color: "#63b3ed" },
  { label: "Computer Vision", sub: "OpenCV, CNN, Real-time Detection", icon: "◎", color: "#9ae6b4" },
  { label: "PCB & Hardware", sub: "KiCad, Altium, Circuit Design", icon: "▦", color: "#fc814a" },
  { label: "PLC & SCADA", sub: "Siemens, Allen Bradley, HMI", icon: "⊞", color: "#c084fc" },
  { label: "Machine Learning", sub: "Python, MATLAB, CNN Models", icon: "◈", color: "#f472b6" },
];

const currentlyWorking = [
  {
    text: "SLAM for wheeled mobile robots at NIT Calicut -- map building, path planning & hardware validation",
    highlight: true,
  },
  {
    text: "Autonomous Waste Segregation System using multi-sensor fusion (odor, density, ultrasonic)",
    highlight: false,
  },
  {
    text: "Deepening embedded hardware-software integration and real-time control systems",
    highlight: false,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-[7vw] py-32 bg-[#080808] text-white overflow-hidden"
    >
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

      {/* Glow accent */}
      <div
        className="pointer-events-none absolute top-0 left-[-100px] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(250,200,50,0.07) 0%, transparent 70%)",
        }}
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
          -- About Me
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-16 max-w-2xl"
          style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
        >
          From{" "}
          <span className="italic text-yellow-400">circuits to code</span>{" "}
          -- engineering systems that matter
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* ── LEFT ── */}
          <div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed mb-4 text-sm"
            >
              Mechatronics Engineering student at Paavai Engineering College with
              hands-on experience in robotics, embedded systems, and sensor-based
              automation. Currently on a research internship at NIT Calicut
              implementing SLAM for wheeled mobile robots.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-10 text-sm"
            >
              From hydraulic solar tracking systems to CNN-based agriculture automation
              and computer vision attendance pipelines -- focused on turning engineering
              ideas into functional, deployable prototypes that solve real problems.
            </motion.p>

            {/* Currently Working On */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 rounded-xl border overflow-hidden"
              style={{ borderColor: "rgba(245,200,66,0.15)" }}
            >
              {/* Card header */}
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{
                  background: "rgba(245,200,66,0.05)",
                  borderColor: "rgba(245,200,66,0.12)",
                }}
              >
                <span className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <h3 className="text-xs uppercase tracking-widest text-yellow-400">
                  Currently Working On
                </h3>
              </div>
              {/* Items */}
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {currentlyWorking.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-5 py-3.5"
                    style={{ background: item.highlight ? "rgba(99,179,237,0.03)" : "transparent" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: item.highlight ? "#63b3ed" : "#f5c842" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: item.highlight ? "#93c5fd" : "#9ca3af" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <SkillsRadar />
              <p className="text-xs text-gray-700 text-center mt-3">
                Hover each point to see proficiency level
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <TechIcons />
            </motion.div>

          </div>

          {/* ── RIGHT -- Education Timeline ── */}
          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-8">
              Education
            </p>

            {/* Vertical line */}
            <div
              className="absolute left-0 top-10 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, rgba(245,200,66,0.35), rgba(245,200,66,0.02))",
              }}
            />

            <div className="pl-8 space-y-10">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[2.1rem] top-2 w-3 h-3 rounded-full border-2 border-yellow-400 transition-all duration-300"
                    style={{ background: item.active ? "#f5c842" : "#080808" }}
                  />

                  {/* Glow behind active dot */}
                  {item.active && (
                    <div
                      className="absolute -left-[2.4rem] top-1.5 w-4 h-4 rounded-full"
                      style={{ background: "rgba(245,200,66,0.2)", filter: "blur(4px)" }}
                    />
                  )}

                  {/* Year badge */}
                  <span
                    className="inline-block text-xs px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider"
                    style={{
                      background: item.active ? "rgba(245,200,66,0.1)" : "rgba(255,255,255,0.04)",
                      color: item.active ? "#f5c842" : "#555",
                      border: item.active ? "1px solid rgba(245,200,66,0.2)" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {item.year}
                  </span>

                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: item.active ? "#f0ece0" : "#9ca3af" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs mb-3" style={{ color: item.active ? "#6b7280" : "#374151" }}>
                    {item.place}
                  </p>

                  <ul className="space-y-2">
                    {item.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: item.active ? "#6b7280" : "#374151" }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: item.active ? "#f5c842" : "#374151" }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(245, 200, 66, 0.6);
          }
          50% {
            transform: scale(1.4);
            box-shadow: 0 0 0 5px rgba(245, 200, 66, 0);
          }
        }
        .dot-breathe { animation: breathe 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;
