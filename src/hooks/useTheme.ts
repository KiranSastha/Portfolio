import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      // Apply light mode via CSS filter on the root — works with hardcoded colors
      root.style.filter = "invert(1) hue-rotate(180deg)";
      // Re-invert images and videos so they look normal
      const style = document.getElementById("theme-img-fix") || document.createElement("style");
      style.id = "theme-img-fix";
      style.innerHTML = `
        img, video, canvas, [class*="robot"], .particle-canvas {
          filter: invert(1) hue-rotate(180deg) !important;
        }
      `;
      document.head.appendChild(style);
      root.setAttribute("data-theme", "light");
    } else {
      root.style.filter = "";
      const style = document.getElementById("theme-img-fix");
      if (style) style.remove();
      root.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
};

export default useTheme;
