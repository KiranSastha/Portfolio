import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-6 rounded-full border flex items-center transition-all duration-300"
      style={{
        background: isDark ? "rgba(245,200,66,0.1)" : "rgba(245,200,66,0.9)",
        borderColor: isDark ? "rgba(245,200,66,0.3)" : "rgba(245,200,66,0.6)",
      }}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 text-xs" style={{ opacity: isDark ? 0.4 : 0 }}>🌙</span>
      <span className="absolute right-1.5 text-xs" style={{ opacity: isDark ? 0 : 0.9 }}>☀️</span>

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 2 : 26 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute w-4 h-4 rounded-full"
        style={{ background: isDark ? "#f5c842" : "#080808" }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
