import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023 – Present",
    title: "B.E. Mechatronics Engineering",
    place: "Paavai Engineering College, Namakkal",
    details: [
      "Currently pursuing with 7.42 CGPA",
      "Focused on robotics, embedded systems, and automation",
    ],
  },
  {
    year: "2021 – 2023",
    title: "HSC",
    place: "N.V.K.S Higher Secondary School, Attoor",
    details: [
      "Completed with 74.8%",
      "Developed strong interest in robotics and intelligent systems",
    ],
  },
  {
    year: "2020 – 2021",
    title: "SSLC",
    place: "N.V.K.S Senior Secondary School, Attoor",
    details: ["Completed with 72%"],
  },
];

const skills = [
  { label: "Embedded Systems", sub: "Arduino, ESP32", icon: "⚡" },
  { label: "Robotics & Automation", sub: "ROS2, Gazebo", icon: "⚙️" },
  { label: "Computer Vision", sub: "OpenCV, CNN", icon: "◎" },
  { label: "PCB & Hardware", sub: "KiCad, Altium", icon: "▦" },
  { label: "PLC & SCADA", sub: "Siemens, Allen Bradley", icon: "⊞" },
  { label: "Machine Learning", sub: "Python, MATLAB", icon: "◈" },
];

const currentlyWorking = [
  "Autonomous Waste Segregation System using odor & density sensors",
  "Deepening embedded hardware–software integration skills",
  "Exploring real-world robotics perception with ROS2",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-[7vw] py-32 bg-[#080808] text-white overflow-hidden"
    >
      {/* Subtle background grid */}
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
        className="pointer-events-none absolute top-0 left-[-100px] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,200,50,0.06) 0%, transparent 70%)",
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
          — About Me
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
          — engineering systems that matter
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              I'm a Mechatronics Engineering student at Paavai Engineering College,
              focused on designing and building intelligent systems that bridge hardware
              and software. My work spans robotics, embedded systems, and automation —
              grounded in real-world problem solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-gray-500 leading-relaxed mb-10 text-sm"
            >
              From hydraulic solar tracking systems to CNN-based agriculture automation
              and computer vision attendance systems — I enjoy turning complex engineering
              ideas into functional, deployable prototypes.
            </motion.p>

            {/* Currently Working On */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10 p-5 rounded-xl border"
              style={{
                background: "rgba(245,200,66,0.03)",
                borderColor: "rgba(245,200,66,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400"
                />
                <h3 className="text-xs uppercase tracking-widest text-yellow-400">
                  Currently Working On
                </h3>
              </div>
              <ul className="space-y-2.5">
                {currentlyWorking.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
                Core Skills
              </p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 cursor-default"
                    style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(245,200,66,0.25)";
                      e.currentTarget.style.background = "rgba(245,200,66,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span className="text-base mt-0.5 shrink-0">{skill.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-200">{skill.label}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{skill.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Timeline */}
          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-8">
              Education
            </p>

            {/* Vertical line */}
            <div
              className="absolute left-0 top-10 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(245,200,66,0.3), rgba(245,200,66,0.03))" }}
            />

            <div className="pl-8 space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[2.1rem] top-1.5 w-3 h-3 rounded-full border-2 border-yellow-400"
                    style={{ background: index === 0 ? "#f5c842" : "#080808" }}
                  />

                  {/* Year badge */}
                  <span
                    className="inline-block text-xs px-2.5 py-1 rounded-full mb-2 uppercase tracking-wider"
                    style={{
                      background: "rgba(245,200,66,0.08)",
                      color: "#f5c842",
                      border: "1px solid rgba(245,200,66,0.15)",
                    }}
                  >
                    {item.year}
                  </span>

                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "#f0ece0" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-3">{item.place}</p>

                  <ul className="space-y-1.5">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-700 shrink-0" />
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