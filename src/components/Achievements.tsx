import { motion } from "framer-motion";

const certifications = [
  {
    date: "09/2025",
    title: "OpenCV Bootcamp",
    provider: "OpenCV University",
    tag: "Computer Vision",
    color: "#63b3ed",
  },
  {
    date: "03/2025",
    title: "Hands-on Training on IoT Embedded Systems",
    provider: "Study World College of Engineering",
    tag: "Embedded & IoT",
    color: "#f5c842",
  },
  {
    date: "02/2025",
    title: "Hands-on Training on DevOps",
    provider: "Kongu Engineering College",
    tag: "DevOps",
    color: "#9ae6b4",
  },
  {
    date: "10/2024",
    title: "Data Analytics using PowerBI",
    provider: "Karpagam Engineering College",
    tag: "Data Analytics",
    color: "#fc814a",
  },
  {
    date: "08/2024 - 11/2024",
    title: "Operating Systems",
    provider: "Coursera -- Google",
    tag: "Systems",
    color: "#9ae6b4",
  },
  {
    date: "03/2024 - 06/2024",
    title: "Supervised Machine Learning",
    provider: "Coursera -- DeepLearning.AI",
    tag: "Machine Learning",
    color: "#c084fc",
  },
];

const events = [
  {
    date: "05/2025",
    title: "ICATS'25 International Conference",
    provider: "Paavai Engineering College, Namakkal",
    description:
      'Presented the Smart Fertilizer Application System Using Machine Learning -- CNN-based plant disease detection with IoT-enabled automation.',
    type: "Conference",
    color: "#f5c842",
  },
  {
    date: "08/2024",
    title: "Techfinix'24 Technical Symposium",
    provider: "Paavai Engineering College, Namakkal",
    description:
      'Presented the Alignment of Solar Panel using Hydraulics -- autonomous hydraulic actuation and efficiency-oriented solar tracking.',
    type: "Symposium",
    color: "#63b3ed",
  },
];

const experience = [
  {
    date: "07/2025 - 08/2025",
    title: "Solar and Water Systems Intern",
    provider: "SWOT Solar, Udumalaippettai",
    description:
      "Analyzed PV system configurations, assisted in system sizing and component selection, and studied real-world deployment challenges of renewable energy systems.",
    color: "#fc814a",
  },
];

const StarIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="14" height="14" rx="3" stroke={color} strokeWidth="1.2" />
    <circle cx="8" cy="8" r="2.5" fill={color} fillOpacity="0.7" />
  </svg>
);

const Achievements = () => {
  return (
    <section
      id="achievements"
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
        className="pointer-events-none absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,200,50,0.05) 0%, transparent 70%)",
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
          -- Achievements
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
        >
          Certifications &{" "}
          <span className="italic text-yellow-400">Recognition</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 mb-16 max-w-lg leading-relaxed"
        >
          A record of continuous learning, hands-on training, and technical
          presentations across robotics, ML, and embedded systems.
        </motion.p>

        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
            Experience
          </p>
          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 p-6 rounded-xl border transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = item.color + "44";
                  (e.currentTarget as HTMLDivElement).style.background = item.color + "08";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="mt-1 w-9 h-9 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: item.color + "18" }}
                >
                  <StarIcon color={item.color} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4
                        className="text-base font-semibold"
                        style={{ color: "#f0ece0" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.provider}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        background: item.color + "18",
                        color: item.color,
                        border: "1px solid " + item.color + "33",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVENTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
            Events & Presentations
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {events.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl border transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = item.color + "44";
                  (e.currentTarget as HTMLDivElement).style.background = item.color + "08";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="mt-1 w-9 h-9 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: item.color + "18" }}
                >
                  <StarIcon color={item.color} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: item.color + "18",
                        color: item.color,
                        border: "1px solid " + item.color + "33",
                      }}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-600">{item.date}</span>
                  </div>
                  <h4
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#f0ece0" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">{item.provider}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
            Certifications & Training
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = item.color + "44";
                  (e.currentTarget as HTMLDivElement).style.background = item.color + "07";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px " + item.color + "12";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <span
                  className="self-start text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: item.color + "18",
                    color: item.color,
                    border: "1px solid " + item.color + "33",
                  }}
                >
                  {item.tag}
                </span>

                <h4
                  className="text-sm font-semibold leading-snug"
                  style={{ color: "#f0ece0" }}
                >
                  {item.title}
                </h4>

                <div className="mt-auto">
                  <p className="text-xs text-gray-500">{item.provider}</p>
                  <p className="text-xs text-gray-700 mt-0.5">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;