import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/KiranSastha/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kiran-s-k/",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:sasthakiran046@gmail.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "Portfolio",
      href: "https://www.kiransk.me",
      icon: (
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15 15 0 0 1 0 20" />
            <path d="M12 2a15 15 0 0 0 0 20" />
          </svg>
            ),
    },
  ];

  const stats = [
    { num: "5", label: "Projects Built" },
    { num: "2", label: "Conferences" },
    { num: "6", label: "Certifications" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[7vw] pt-24 pb-32 bg-[#080808] text-white overflow-hidden">

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Primary Glow Orb */}
      <motion.div
        className="pointer-events-none absolute top-[-120px] right-[-80px] w-[520px] h-[520px] rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          y,
          background:
            "radial-gradient(circle, rgba(250,200,50,0.18) 0%, rgba(250,170,20,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Secondary Accent Orb */}
      <div
        className="pointer-events-none absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,200,50,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs uppercase tracking-widest"
          style={{
            background: "rgba(250,200,50,0.08)",
            borderColor: "rgba(250,200,50,0.2)",
            color: "#f5c842",
          }}
        >
          <span className="dot-breathe inline-block w-1.5 h-1.5 rounded-full bg-yellow-400" />
          Open to Internships & Work
        </motion.div>

        {/* Specialty Tags */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="uppercase tracking-widest text-gray-500 text-xs mb-5"
        >
          Robotics &nbsp;•&nbsp; Embedded Systems &nbsp;•&nbsp; PCB Design &nbsp;•&nbsp; Automation &nbsp;•&nbsp; PLC & SCADA
        </motion.p>

        {/* Name — original bold font preserved */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
          style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
        >
          S. K.{" "}
          <span className="text-yellow-400 italic">Kiran</span>
        </motion.h1>

        {/* College & Degree */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-2 text-xs uppercase tracking-widest"
          style={{ color: "#444" }}
        >
          B.E Mechatronics Engineering &nbsp;·&nbsp; Paavai Engineering College &nbsp;·&nbsp; Class of 2027
        </motion.p>

        {/* Typing Role Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 flex items-center gap-2 text-base md:text-lg font-light text-gray-400"
        >
          <span>Engineering</span>
          <span className="text-yellow-400 opacity-50">/</span>
          <TypeAnimation
            sequence={[
              "Robotic Systems",
              2000,
              "Embedded Solutions",
              2000,
              "Automation & Control",
              2000,
              "PCB & Hardware",
              2000,
              "PLC & SCADA",
              2000,
            ]}
            speed={60}
            repeat={Infinity}
            className="text-yellow-400 font-normal"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 text-base md:text-lg font-light italic"
          style={{ color: "#555" }}
        >
          "Engineering intelligence into machines — from sensor to system."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-4 max-w-lg text-sm font-light leading-relaxed text-gray-500"
        >
          Mechatronics undergrad with hands-on experience in robotics, embedded systems,
          and sensor-based automation. Presented at ICATS'25 and Techfinix'24.
          Building systems that bridge hardware and intelligence.
        </motion.p>

        {/* Accent Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 h-px w-14 origin-left"
          style={{ background: "linear-gradient(90deg, #f5c842, transparent)" }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider bg-yellow-400 text-black transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,200,66,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm text-gray-400 border transition-all duration-200 hover:text-yellow-400 hover:-translate-y-0.5"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
            }
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 2h6l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-5 mt-6"
        >
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 transition-all duration-200 hover:text-yellow-400 hover:-translate-y-0.5"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-14 mt-14 mb-6"
        >
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div
                className="text-3xl font-bold"
                style={{ color: "#f0ece0" }}
              >
                {num}
                <span className="text-yellow-400">+</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-600 mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-14 left-[7vw] flex items-center gap-3 text-gray-600 text-xs uppercase tracking-widest"
      >
        <div className="relative w-10 h-px overflow-hidden bg-gray-800">
          <motion.div
            className="absolute inset-y-0 left-0 w-full bg-yellow-400"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
        Scroll to explore
      </motion.div>

       <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(245, 200, 66, 0.6);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            box-shadow: 0 0 0 5px rgba(245, 200, 66, 0);
            opacity: 0.85;
          }
        }
        .dot-breathe {
          display: inline-block;
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;