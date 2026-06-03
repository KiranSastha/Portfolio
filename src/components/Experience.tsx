import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Intern",
    company: "NIT Calicut",
    department: "Centre for Career Development, Electrical Engineering",
    type: "Research Internship",
    duration: "May 2026 -- Present",
    period: "2 months",
    location: "Kozhikode, Kerala, India",
    mode: "On-site",
    color: "#9ae6b4",
    skills: ["ROS2", "SLAM", "Robot Perception", "Path Planning", "Embedded Control"],
    bullets: [
      "Implementing SLAM (Simultaneous Localization and Mapping) for wheeled mobile robots covering map building, localization, and real-time control.",
      "Developing concepts related to localization, mapping, path planning, and obstacle avoidance for autonomous navigation.",
      "Designing and testing robot control algorithms validated on a physical mobile robotic platform.",
      "Performing hardware-in-the-loop validation of developed solutions under the guidance of Dr. Rahul Radhakrishnan.",
      "Building hands-on depth in robotics, autonomous systems, and control engineering.",
    ],
    active: true,
    driveLink: "", // paste NIT Calicut internship certificate/offer letter Drive link here
  },
  {
    title: "Solar and Water Systems Intern",
    company: "SWOT Solar",
    department: "Renewable Energy & Water Treatment Division",
    type: "Industry Internship",
    duration: "Jul 2025 -- Aug 2025",
    period: "2 months",
    location: "Udumalaippettai, Tamil Nadu, India",
    mode: "On-site",
    color: "#fc814a",
    skills: ["Solar Energy", "System Sizing", "Water Treatment", "Technical Documentation"],
    bullets: [
      "Analyzed diverse photovoltaic technologies and water treatment methods, identifying opportunities to enhance system efficiency and sustainability.",
      "Calculated and developed practical system sizing for solar and water purification projects, ensuring optimal component selection and integration.",
      "Authored comprehensive technical documentation for solar energy systems and water treatment processes, improving project clarity and standardizing knowledge transfer.",
      "Contributed to the integration of renewable energy and water purification solutions, gaining hands-on engineering field experience.",
    ],
    active: false,
    driveLink: "https://drive.google.com/file/d/13lPgRfQS8_l7jB7uBY33Wape7f1subhi/view?usp=sharing",
  },
];

const CertIcon = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M4 2h6l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 2v4h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9h4M6 11h2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const Experience = () => {
  return (
    <section
      id="experience"
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

      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 right-[-100px] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(154,230,180,0.05) 0%, transparent 70%)",
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
          -- Experience
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
            Work{" "}
            <span className="italic text-yellow-400">Experience</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            Hands-on engineering exposure across robotics research and renewable energy systems.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border overflow-hidden"
              style={{
                borderColor: exp.active ? exp.color + "33" : "rgba(255,255,255,0.07)",
                background: exp.active
                  ? "linear-gradient(135deg, " + exp.color + "06 0%, rgba(8,8,8,0.8) 100%)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              {/* Card Header */}
              <div
                className="px-8 py-6 border-b flex flex-col md:flex-row md:items-start justify-between gap-4"
                style={{ borderColor: exp.active ? exp.color + "22" : "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: exp.color + "18", border: "1px solid " + exp.color + "33" }}
                  >
                    {index === 0 ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={exp.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={exp.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )}
                  </div>

                  {/* Title block */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "#f0ece0" }}
                      >
                        {exp.title}
                      </h3>
                      {exp.active && (
                        <span className="flex items-center gap-1.5 text-xs" style={{ color: exp.color }}>
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: exp.color, animation: "breathe 2s ease-in-out infinite" }}
                          />
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">{exp.department}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: exp.color + "15",
                      color: exp.color,
                      border: "1px solid " + exp.color + "30",
                    }}
                  >
                    {exp.type}
                  </span>
                  <p className="text-xs text-gray-500">{exp.duration} &middot; {exp.period}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="#6b7280" strokeWidth="1.2" />
                      <circle cx="8" cy="6" r="1.5" stroke="#6b7280" strokeWidth="1.2" />
                    </svg>
                    {exp.location} &middot; {exp.mode}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-8 py-6">
                <div className="grid md:grid-cols-3 gap-8">

                  {/* Bullets */}
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-widest mb-4" style={{ color: exp.color }}>
                      Responsibilities
                    </p>
                    <ul className="space-y-3">
                      {exp.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1 h-1 rounded-full shrink-0"
                            style={{ background: exp.color }}
                          />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-4" style={{ color: exp.color }}>
                      Skills Gained
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1.5 rounded-md"
                          style={{
                            background: exp.color + "10",
                            color: exp.color,
                            border: "1px solid " + exp.color + "25",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate button */}
                  {exp.driveLink && (
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <a
                        href={exp.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-md border transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          borderColor: exp.color + "44",
                          color: exp.color,
                          background: exp.color + "08",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = exp.color + "18";
                          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px " + exp.color + "20";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = exp.color + "08";
                          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                        }}
                      >
                        <CertIcon color={exp.color} />
                        View Internship Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(154, 230, 180, 0.6);
          }
          50% {
            transform: scale(1.4);
            box-shadow: 0 0 0 5px rgba(154, 230, 180, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;