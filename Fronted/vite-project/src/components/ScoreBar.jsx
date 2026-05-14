function barColor(score) {
  if (score >= 7) return "#4ade80"; // green
  if (score >= 4) return "#fbbf24"; // amber
  return "#f87171";                  // red
}

export default function ScoreBar({ score }) {
  const pct   = (score / 10) * 100;
  const color = barColor(score);

  return (
    <>
      {/* Label row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
      }}>
        <span style={{ fontSize: 13, color: "#94a3b8" }}>Efficiency Score</span>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 700,
          fontSize: 14,
          color: "#f1f5f9",
        }}>
          {score} / 10
        </span>
      </div>

      {/* Bar track */}
      <div style={{
        position: "relative",
        height: 8,                               // ← change bar height here
        background: "rgba(255,255,255,0.08)",
        borderRadius: 999,
        overflow: "hidden",
      }}>
        {/* Fill */}
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          height: "100%",
          width: `${pct}%`,
          background: color,
          borderRadius: 999,
          transition: "width 1s ease",
        }} />
      </div>
    </>
  );
}