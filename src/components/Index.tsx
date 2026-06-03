import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import MouseTracker from "../components/MouseTracker";
import ScrollProgress from "../components/ScrollProgress";
import TerminalIntro from "../components/TerminalIntro";
import NoiseOverlay from "../components/NoiseOverlay";
import SectionDivider from "../components/SectionDivider";
import BackToTop from "../components/BackToTop";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  // Scroll to section from hash on load
  useEffect(() => {
    if (!introComplete) return;
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [introComplete]);

  return (
    <>
      {/* Global overlays */}
      <MouseTracker />
      <ScrollProgress />
      <BackToTop />
      <NoiseOverlay />

      {/* Terminal intro — shows once per session */}
      <TerminalIntro onDone={() => setIntroComplete(true)} />

      {/* Main content — fades in after intro */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#080808] text-white min-h-screen"
          >
            <Navbar />

            <main>
              <Hero />
              <SectionDivider />
              <About />
              <SectionDivider />
              <Experience />
              <SectionDivider />
              <Projects />
              <SectionDivider />
              <Achievements />
              <SectionDivider />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
