import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll position
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

  const linkClass = (section: string) =>
    `relative transition ${
      active === section
        ? "text-yellow-400"
        : "hover:text-yellow-400 text-gray-300"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold tracking-wide">
          Kiran<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* About */}
          <a href="#about" className={linkClass("about")}>
            About
            {active === "about" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
            )}
          </a>

          {/* Projects */}
          <a href="#work" className={linkClass("work")}>
            Projects
            {active === "work" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
            )}
          </a>

          {/* Achievements */}
          <a href="#achievements" className={linkClass("achievements")}>
            Achievements
            {active === "achievements" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
            )}
          </a>

          {/* Contact */}
          <a href="#contact" className={linkClass("contact")}>
            Contact
            {active === "contact" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"></span>
            )}
          </a>

          {/* 🔥 Badge */}
          <span className="text-xs px-3 py-1 border border-yellow-400 text-yellow-400 rounded-full animate-pulse">
            Open to Internships
          </span>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-sm bg-black/95 backdrop-blur-xl">

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#work" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#achievements" onClick={() => setOpen(false)}>
            Achievements
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <span className="text-xs px-3 py-1 border border-yellow-400 text-yellow-400 rounded-full">
            Open to Internships
          </span>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;