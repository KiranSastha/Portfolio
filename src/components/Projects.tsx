import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Solar Panel Alignment",
    description:
      "Designed a hydraulic-based solar tracking system to optimize panel efficiency by dynamically aligning with sunlight.",
    tech: ["Hydraulics", "Mechanical Design"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Fertilizer System",
    description:
      "Machine learning-based system to predict optimal fertilizer usage, improving agricultural efficiency.",
    tech: ["Machine Learning", "IoT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Waste Segregation System",
    description:
      "Automated waste sorting system using sensors to classify materials for efficient recycling.",
    tech: ["Sensors", "Embedded Systems"],
    github: "#",
    demo: "#",
  },
  {
    title: "ROS Autonomous Robot",
    description:
      "Developed an autonomous robot simulation using ROS, Gazebo, and RViz for navigation and mapping.",
    tech: ["ROS", "Gazebo", "RViz"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
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

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-400 mb-4">{p.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
