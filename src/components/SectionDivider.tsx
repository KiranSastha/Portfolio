const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div
    className="relative w-full h-24 pointer-events-none"
    style={{
      background: flip
        ? "linear-gradient(to top, #080808, transparent)"
        : "linear-gradient(to bottom, #080808, transparent)",
      marginTop: flip ? "-6rem" : "0",
      marginBottom: flip ? "0" : "-6rem",
      zIndex: 1,
    }}
  />
);

export default SectionDivider;
