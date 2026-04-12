import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/KiranSastha/",
    sub: "KiranSastha",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kiran-s-k/",
    sub: "kiran-s-k",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:sasthakiran046@gmail.com",
    sub: "sasthakiran046@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    href: "https://kiransk.me",
    sub: "kiransk.me",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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

      {/* Glow center */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,200,50,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight text-center mb-6"
          style={{ color: "#f0ece0", letterSpacing: "-0.02em" }}
        >
          Let's build something{" "}
          <span className="italic text-yellow-400">impactful</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 text-center max-w-lg mx-auto leading-relaxed mb-14"
        >
          Interested in robotics, embedded systems, or automation projects?
          Open to internships, collaborations, and real-world engineering challenges.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <a
            href="mailto:sasthakiran046@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest bg-yellow-400 text-black transition-all duration-200 hover:-translate-y-1"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(245,200,66,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.background = "#ffe066";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.background = "#f5c842";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </a>
        </motion.div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-xs uppercase tracking-widest text-gray-700">Find me on</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </motion.div>

        {/* Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 + i * 0.07 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 p-5 rounded-xl border transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,200,66,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,200,66,0.04)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(245,200,66,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <span className="text-gray-500 transition-colors duration-200 group-hover:text-yellow-400">
                {s.icon}
              </span>
              <div>
                <p className="text-sm font-medium" style={{ color: "#f0ece0" }}>{s.label}</p>
                <p className="text-xs text-gray-600 mt-0.5 truncate">{s.sub}</p>
              </div>
              <svg
                className="mt-auto self-end text-gray-700 group-hover:text-yellow-400 transition-colors duration-200"
                width="12" height="12" viewBox="0 0 16 16" fill="none"
              >
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume download strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-6 p-5 rounded-xl border mb-20 flex-wrap"
          style={{
            background: "rgba(245,200,66,0.03)",
            borderColor: "rgba(245,200,66,0.12)",
          }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: "#f0ece0" }}>
              Want the full picture?
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Download my resume for a complete overview of my skills and projects.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold border transition-all duration-200 shrink-0 hover:-translate-y-0.5"
            style={{ borderColor: "rgba(245,200,66,0.4)", color: "#f5c842" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f5c842";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5c842";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-gray-700">
            {new Date().getFullYear()} S. K. Kiran -- Built with passion for robotics
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400"
            />
            <p className="text-xs text-gray-700">Open to Internships</p>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245,200,66,0.6); }
          50% { transform: scale(1.4); box-shadow: 0 0 0 5px rgba(245,200,66,0); }
        }
        .dot-breathe { animation: breathe 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Contact;