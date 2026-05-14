export const COLORS = {
  accent: "#1D9E75",         // primary green — used for buttons, labels
  accentDark: "#0f6e56",     // darker green — button gradient end
  accentGlow: "rgba(29,158,117,0.15)",

  blue: "#2563eb",           // download button
  blueDark: "#1d4ed8",

  success: "#4ade80",        // time saved metric, low risk
  warning: "#fbbf24",        // medium risk
  danger: "#f87171",         // high risk, compliance box

  bgPage: "#0a0f1e",         // outer page background
  bgCard: "rgba(255,255,255,0.04)",
  bgCardHover: "rgba(255,255,255,0.06)",
  bgMetric: "rgba(255,255,255,0.05)",
  bgInput: "rgba(255,255,255,0.06)",

  border: "rgba(255,255,255,0.1)",
  borderInput: "rgba(255,255,255,0.12)",
  borderAccent: "rgba(29,158,117,0.4)",

  textPrimary: "#f1f5f9",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  textDimmed: "#475569",
};

// ── Typography ─────────────────────────────────
export const FONTS = {
  body: "'IBM Plex Sans', 'Segoe UI', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

// ── Shared style objects ───────────────────────
export const styles = {
  page: {
    minHeight: "100vh",
    background: `linear-gradient(135deg, ${COLORS.bgPage} 0%, #0d1b2a 50%, #0a1628 100%)`,
    fontFamily: FONTS.body,
    padding: "2rem 1rem",
    color: COLORS.textPrimary,
  },

  container: {
    maxWidth: 900,
    margin: "0 auto",
  },

  // ── Header ──
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: COLORS.accentGlow,
    border: `1px solid ${COLORS.borderAccent}`,
    borderRadius: 999,
    padding: "6px 16px",
    fontSize: 12,
    color: COLORS.success,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 0.75rem",
    background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    margin: 0,
  },

  // ── Cards ──
  card: {
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 16,
    padding: "2rem",
    backdropFilter: "blur(10px)",
    marginBottom: "1.5rem",
  },

  // ── Form elements ──
  sectionLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: COLORS.accent,
    marginBottom: "1.25rem",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 500,
    color: COLORS.textSecondary,
  },
  input: {
    background: COLORS.bgInput,
    border: `1px solid ${COLORS.borderInput}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: COLORS.textPrimary,
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    background: COLORS.bgInput,
    border: `1px solid ${COLORS.borderInput}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: COLORS.textPrimary,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  textarea: {
    background: COLORS.bgInput,
    border: `1px solid ${COLORS.borderInput}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: COLORS.textPrimary,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: 90,
    fontFamily: "inherit",
  },

  // ── Buttons ──
  primaryBtn: {
    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentDark})`,
    border: "none",
    borderRadius: 10,
    padding: "14px 32px",
    fontSize: 15,
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "opacity 0.2s, transform 0.1s",
    width: "100%",
    justifyContent: "center",
  },
  downloadBtn: {
    background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`,
    border: "none",
    borderRadius: 10,
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "opacity 0.2s",
  },

  // ── Error box ──
  error: {
    background: "rgba(226,75,74,0.12)",
    border: "1px solid rgba(226,75,74,0.3)",
    borderRadius: 8,
    padding: "12px 16px",
    fontSize: 13,
    color: COLORS.danger,
    marginBottom: "1rem",
  },

  // ── Report metrics ──
  metricGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  metricCard: {
    background: COLORS.bgMetric,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 12,
    padding: "1.25rem",
    textAlign: "center",
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 800,
    fontFamily: FONTS.mono,
    lineHeight: 1,
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  // ── Report text sections ──
  summaryBox: {
    background: "rgba(29,158,117,0.08)",
    border: "1px solid rgba(29,158,117,0.25)",
    borderRadius: 12,
    padding: "1.25rem",
    fontSize: 14,
    lineHeight: 1.7,
    color: "#cbd5e1",
    marginBottom: "1.5rem",
  },
  recList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  recItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: 14,
    lineHeight: 1.5,
    color: "#cbd5e1",
  },
  recNumber: {
    background: "rgba(29,158,117,0.2)",
    color: COLORS.success,
    borderRadius: "50%",
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 1,
  },

  divider: {
    border: "none",
    borderTop: `1px solid ${COLORS.border}`,
    margin: "1.25rem 0",
  },

  // ── Loading ──
  spinner: {
    width: 40,
    height: 40,
    border: `3px solid ${COLORS.accentGlow}`,
    borderTop: `3px solid ${COLORS.accent}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  footer: {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: 12,
    color: "#334155",
  },
};

// ── Risk badge helper ──────────────────────────
export function riskBadgeStyle(level) {
  const map = {
    Low:    { bg: "rgba(74,222,128,0.15)",  color: "#4ade80", border: "rgba(74,222,128,0.3)" },
    Medium: { bg: "rgba(251,191,36,0.15)",  color: "#fbbf24", border: "rgba(251,191,36,0.3)" },
    High:   { bg: "rgba(248,113,113,0.15)", color: "#f87171", border: "rgba(248,113,113,0.3)" },
  };
  const t = map[level] || map.Low;
  return {
    display: "inline-block",
    padding: "3px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.06em",
    background: t.bg,
    color: t.color,
    border: `1px solid ${t.border}`,
  };
}