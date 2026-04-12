import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023 – Present",
    title: "B.E. Mechatronics Engineering",
    place: "Paavai Engineering College, Namakkal",
    details: [
      "Currently pursuing with 7.54 CGPA",
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

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-24 bg-black text-white">
      
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From <span className="italic text-yellow-400">circuits to code</span> — <br />
            engineering systems that matter
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a Mechatronics Engineering student focused on designing and building 
            intelligent systems that combine hardware and software. My work spans 
            robotics, embedded systems, and automation.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I enjoy solving real-world engineering problems — from developing 
            hydraulic solar tracking systems to building computer vision-based 
            attendance systems and smart automation solutions.
          </p>

          {/* 🔥 CURRENTLY WORKING */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Currently Working On
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Automated Waste Segregation System</li>
              <li>• Improving embedded system design & integration</li>
              <li>• Exploring real-world robotics applications</li>
            </ul>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Embedded Systems (Arduino, ESP8266)", icon: "🔌" },
              { label: "Robotics & Automation", icon: "🤖" },
              { label: "Computer Vision (OpenCV)", icon: "👁️" },
              { label: "ROS / Gazebo", icon: "🧭" },
              { label: "IoT Systems", icon: "📡" },
              { label: "Machine Learning (Basics)", icon: "🧠" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="border border-gray-800 rounded-lg p-4 text-center hover:border-yellow-400 transition"
              >
                <span className="text-xl mb-1 block">{skill.icon}</span>
                <p className="text-sm text-gray-300">{skill.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE - TIMELINE */}
        <div className="relative border-l border-gray-800 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[6px] mt-2"></div>

              <p className="text-sm text-gray-500">{item.year}</p>

              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.place}</p>

              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;