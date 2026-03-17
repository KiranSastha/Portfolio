import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Solar Panel Alignment",
    description:
      "Designed a hydraulic-based solar tracking system to optimize panel efficiency by dynamically aligning with sunlight.",
    tech: ["Hydraulics", "Mechanical Design"],
  },
  {
    title: "Smart Fertilizer System",
    description:
      "Machine learning-based system to predict optimal fertilizer usage, improving agricultural efficiency.",
    tech: ["Machine Learning", "IoT"],
  },
  {
    title: "Waste Segregation System",
    description:
      "Automated waste sorting system using sensors to classify materials for efficient recycling.",
    tech: ["Sensors", "Embedded Systems"],
  },
  {
    title: "ROS Autonomous Robot",
    description:
      "Developed an autonomous robot simulation using ROS, Gazebo, and RViz for navigation and mapping.",
    tech: ["ROS", "Gazebo", "RViz"],
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

const timelineData = [
  {
    year: "2023 – Present",
    title: "B.E. Mechatronics Engineering",
    place: "Paavai Engineering College, Namakkal",
    details: [
      "Currently pursuing with 7.54 CGPA",
      "Applied theoretical knowledge through hands-on projects",
    ],
  },
  {
    year: "2021 – 2023",
    title: "HSC",
    place: "N.V.K.S Higher Secondary School, Attoor",
    details: [
      "Completed with 74.8%",
      "Developed early interest in robotics and learned basics of ROS & Gazebo",
    ],
  },
  {
    year: "2020 – 2021",
    title: "SSLC",
    place: "N.V.K.S Senior Secondary School, Attoor",
    details: [
      "Completed with 72%",
    ],
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="px-6 md:px-20 py-24 bg-black text-white">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        My <span className="italic text-yellow-400">Journey</span>
      </h2>

      <div className="relative border-l border-gray-800">

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6"
          >
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2 border border-black"></div>

            {/* Content */}
            <p className="text-sm text-gray-500">{item.year}</p>

            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{item.place}</p>

            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {item.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;