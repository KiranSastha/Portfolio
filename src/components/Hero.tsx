import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="min-h-screen background-grid flex flex-col justify-center items-center text-center px-6 relative bg-black text-white overflow-hidden">

      {/* 🔥 Gradient Lighting (FIXED) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-300/5 animate-pulse"></div>



      {/* 🔥 Glow Background */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl top-[-150px] right-[-150px]"
      />

      {/* 🔥 CONTENT (ensure above everything) */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-widest text-gray-500 text-sm"
        >
          Robotics • Embedded Systems • Automation
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mt-6 leading-tight"
        >
          S. K. <span className="text-yellow-400 italic">Kiran</span>
        </motion.h1>

        {/* 🔥 STRONGER VALUE PROP */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          I build intelligent systems that solve real-world problems
        </motion.h2>

        {/* 🔥 Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-md md:text-lg text-yellow-400 h-[30px]"
        >
          <TypeAnimation
            sequence={[
              "Robotic Systems",
              2000,
              "Embedded Solutions",
              2000,
              "Automation Projects",
              2000,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-md md:text-lg max-w-xl mt-6 text-gray-400"
        >
          Turning engineering ideas into functional prototypes — focused on robotics,
          automation, and system integration.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {/* Primary */}
          <a
            href="#work"
            className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg glow-hover hover:bg-yellow-300 transition"
          >
            View Projects
          </a>

          {/* Secondary */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            View Resume
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500"
      >
        ↓
      </motion.div>

    </section>
  );
};

export default Hero;