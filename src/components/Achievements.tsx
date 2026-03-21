import { motion } from "framer-motion";

const certifications = [
  {
    date: "08/2024 – 11/2024",
    title: "Operating Systems",
    provider: "Coursera (Google)",
  },
  {
    date: "03/2024 – 06/2024",
    title: "Supervised Machine Learning",
    provider: "Coursera (DeepLearning.AI)",
  },
  {
    date: "2025",
    title: "OpenCV Bootcamp",
    provider: "OpenCV University",
  },
  {
    date: "2025",
    title: "ABB IRB1200 Robot Training",
    provider: "ABB Robotics",
  },
];

const events = [
  {
    date: "2025",
    title: "ICATS’25 Project Presentation",
    provider: "Paavai Engineering College",
  },
  {
    date: "2025",
    title: "Techfinix Technical Symposium",
    provider: "Paavai Engineering College",
  },
];

const Section = ({ title, data }: any) => (
  <div>
    {/* Heading */}
    <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
      {title}
    </h3>

    {/* Timeline */}
    <div className="relative border-l border-gray-800 pl-6">
      {data.map((item: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-10 group"
        >
          {/* Dot */}
          <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[6px] mt-2 group-hover:scale-125 transition"></div>

          {/* Card */}
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900/40 backdrop-blur-sm hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition">

            {/* Date */}
            <p className="text-xs text-gray-500">{item.date}</p>

            {/* Title */}
            <h4 className="text-md font-semibold mt-1">
              {item.title}
            </h4>

            {/* Provider */}
            <p className="text-gray-400 text-sm">
              {item.provider}
            </p>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Achievements = () => {
  return (
    <section className="px-6 md:px-20 py-24 bg-black text-white">

      {/* Main Heading */}
      <h2 className="text-4xl font-bold mb-16">
        Achievements &{" "}
        <span className="text-yellow-400">Certifications</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* Certifications */}
        <Section title="Certifications" data={certifications} />

        {/* Events */}
        <Section title="Events & Achievements" data={events} />

      </div>

    </section>
  );
};

export default Achievements;