import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          Portfolio<span className="text-yellow-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#work" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>

          {/* Resume Button */}
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
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-sm bg-black/95">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
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