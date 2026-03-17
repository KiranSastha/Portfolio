import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="uppercase tracking-widest text-muted-foreground text-sm"
      >
        Robotics & Embedded Systems Developer
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mt-6"
      >
        S. K. <span className="text-gradient italic">Kiran</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-xl mt-6 text-muted-foreground"
      >
        Building intelligent systems at the intersection of hardware and software — 
        from autonomous robots to smart IoT solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        {/* View Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
        >
          View Resume
        </a>

        {/* Projects */}
        <a
          href="#work"
          className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition"
        >
          View Projects
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-muted-foreground"
      >
        ↓
      </motion.div>

    </section>
  );
};

export default Hero;