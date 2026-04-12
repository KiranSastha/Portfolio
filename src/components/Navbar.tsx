import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "work", "achievements", "contact"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(sec);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", section: "about" },
    { label: "Projects", href: "#work", section: "work" },
    { label: "Achievements", href: "#achievements", section: "achievements" },
    { label: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px) saturate(120%)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px) saturate(120%)",
          background: scrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.09)" : "1px solid rgba(255,255,255,0.03)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
            : "none",
        }}
      >
        <div className="flex justify-between items-center px-[7vw] py-5">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-white group"
          >
            Kiran
            <span className="text-yellow-400 group-hover:opacity-60 transition-opacity duration-200">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* Nav Links */}
            <div className="flex items-center gap-7">
              {navLinks.map(({ label, href, section }) => (
                <a
                  key={section}
                  href={href}
                  className="relative text-xs uppercase tracking-widest font-medium transition-colors duration-200 group"
                  style={{
                    color: active === section ? "#f5c842" : "#6b7280",
                  }}
                >
                  {label}
                  <span
                    className="absolute left-0 -bottom-1 h-px bg-yellow-400 transition-all duration-300"
                    style={{
                      width: active === section ? "100%" : "0%",
                    }}
                  />
                  <style>{`
                    a[href="${href}"]:hover { color: #f5c842; }
                    a[href="${href}"]:hover span { width: 100% !important; }
                  `}</style>
                </a>
              ))}
            </div>

            <div className="w-px h-4 bg-white/10" />

            {/* Open to Internships badge */}
            <div
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "rgba(245,200,66,0.25)",
                color: "#f5c842",
                background: "rgba(245,200,66,0.06)",
              }}
            >
              <span className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="tracking-wider uppercase" style={{ fontSize: "10px" }}>
                Open to Internships
              </span>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-md border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(245,200,66,0.4)",
                color: "#f5c842",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f5c842";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,200,66,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#f5c842";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 2h6l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-gray-400 hover:text-yellow-400 transition-colors duration-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(8,8,8,0.85) 100%)",
                backdropFilter: "blur(28px) saturate(180%)",
                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                borderColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col px-[7vw] py-6 gap-5">
                {navLinks.map(({ label, href, section }) => (
                  <a
                    key={section}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-widest transition-colors duration-200"
                    style={{ color: active === section ? "#f5c842" : "#6b7280" }}
                  >
                    {label}
                  </a>
                ))}

                <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

                <div
                  className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border self-start"
                  style={{
                    borderColor: "rgba(245,200,66,0.25)",
                    color: "#f5c842",
                    background: "rgba(245,200,66,0.06)",
                  }}
                >
                  <span className="dot-breathe w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="tracking-wider uppercase" style={{ fontSize: "10px" }}>
                    Open to Internships
                  </span>
                </div>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-md border self-start transition-all duration-200"
                  style={{ borderColor: "rgba(245,200,66,0.4)", color: "#f5c842" }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2h6l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;