import { motion } from "framer-motion";

const techStack = [
  {
    name: "Python",
    color: "#3776AB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.24 1.818a1.047 1.047 0 110 2.094 1.047 1.047 0 010-2.094z"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.1S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.13V20.87S5.72 24 12.086 24zm3.24-1.818a1.047 1.047 0 110-2.094 1.047 1.047 0 010 2.094z"/>
      </svg>
    ),
  },
  {
    name: "C++",
    color: "#00599C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M22.394 6c-.167-.29-.38-.543-.593-.74L13.72.19c-.428-.253-1.013-.253-1.44 0L3.2 5.26c-.428.253-.855.76-.855 1.27v10.14c0 .51.297 1.017.855 1.27l9.08 5.07c.428.254 1.013.254 1.44 0l9.08-5.07c.559-.253.855-.76.855-1.27V6.53c0-.255-.127-.51-.21-.53zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
      </svg>
    ),
  },
  {
    name: "ROS2",
    color: "#22314E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 110 20A10 10 0 0112 2zm0 3a7 7 0 100 14A7 7 0 0012 5zm0 2a5 5 0 110 10A5 5 0 0112 7zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
  {
    name: "OpenCV",
    color: "#5C3EE8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
      </svg>
    ),
  },
  {
    name: "Arduino",
    color: "#00979D",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5H9v-3H6v-3h3V7.5h1.5v9zm4.5 0h-1.5v-9H15v2.25h1.5v1.5H15v5.25zm1.5-5.25V9.75H18v1.5h-1.5z"/>
      </svg>
    ),
  },
  {
    name: "ESP32",
    color: "#E7352C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
      </svg>
    ),
  },
  {
    name: "MATLAB",
    color: "#e16737",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M2 2l5 12 3-5 4 8 3-4 5-11H2zm5.5 10L4.5 4h15l-4 9-3 4-4-8-1 1z"/>
      </svg>
    ),
  },
  {
    name: "Linux",
    color: "#FCC624",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.09-2.346 2.642-2.224 4.261.014.24.046.48.089.72-3.144 1.98-2.251 5.041-1.918 5.988a5.538 5.538 0 001.616 2.205 2.05 2.05 0 00-.054.486c0 1.273.985 2.25 2.2 2.25.63 0 1.196-.244 1.62-.64.404.396.97.64 1.597.64 1.214 0 2.2-.977 2.2-2.25 0-.162-.017-.322-.05-.477.37-.36.693-.78.942-1.244.387.244.837.386 1.32.386 1.367 0 2.476-1.11 2.476-2.477 0-.364-.08-.71-.22-1.022.48-.444.802-1.065.802-1.763 0-.833-.42-1.568-1.057-2.015.133-.33.21-.686.21-1.059 0-1.604-1.297-2.905-2.9-2.905-.17 0-.34.014-.502.042-.368-1.006-.917-1.888-1.62-2.54-.702-.652-1.538-1.022-2.398-1.022-.07 0-.14.002-.21.006z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.917 3.05 1.837 1.837 0 01-2.65 0 1.837 1.837 0 01-.404-2.002l-2.48-2.48v6.506a1.838 1.838 0 01.48 3.307 1.838 1.838 0 01-2.49-2.49 1.837 1.837 0 011.02-.501V9.897a1.838 1.838 0 01-1.02-.502 1.837 1.837 0 01-.405-2.002L7.634 4.736 .45 11.922a1.55 1.55 0 000 2.188l10.48 10.477a1.55 1.55 0 002.187 0l10.43-10.43a1.55 1.55 0 000-2.227z"/>
      </svg>
    ),
  },
  {
    name: "SolidWorks",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7L12 4.18z"/>
      </svg>
    ),
  },
  {
    name: "Python ML",
    color: "#FF6F00",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2a5 5 0 015 5v1h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v1h6V7a3 3 0 00-3-3zm5 8a1 1 0 100 2 1 1 0 000-2zm-10 0a1 1 0 100 2 1 1 0 000-2z"/>
      </svg>
    ),
  },
  {
    name: "HTML/CSS",
    color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
];

const TechIcons = () => {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = tech.color + "55";
              e.currentTarget.style.background = tech.color + "10";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${tech.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ color: tech.color }}>{tech.icon}</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
