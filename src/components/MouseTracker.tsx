import { useEffect, useRef } from "react";

const MouseTracker = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined)();
  const isHovering = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Animate ring with smooth lag behind cursor
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        // Snap ring to position on first appearance
        ringPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Detect hoverable elements to change cursor style
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable && !isHovering.current) {
        isHovering.current = true;
        dot.style.width = "6px";
        dot.style.height = "6px";
        dot.style.background = "#ffe066";
        ring.style.width = "42px";
        ring.style.height = "42px";
        ring.style.borderColor = "rgba(245,200,66,0.8)";
        ring.style.background = "rgba(245,200,66,0.06)";
      } else if (!isClickable && isHovering.current) {
        isHovering.current = false;
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.background = "#f5c842";
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.borderColor = "rgba(245,200,66,0.4)";
        ring.style.background = "transparent";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — snaps to cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#f5c842",
          opacity: 0,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
          boxShadow: "0 0 6px rgba(245,200,66,0.8)",
        }}
      />

      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid rgba(245,200,66,0.4)",
          background: "transparent",
          opacity: 0,
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default MouseTracker;
