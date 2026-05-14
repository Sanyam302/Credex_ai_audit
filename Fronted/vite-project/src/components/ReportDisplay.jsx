import MetricCard from "./MetricCard.jsx";
import ScoreBar   from "./ScoreBar.jsx";
import { styles, riskBadgeStyle } from "../styles.js";
import { downloadReportAsTxt }    from "../utils/Audithelpers.js";

export default function ReportDisplay({ report }) {
  const {
    meta,
    executiveSummary,
    timeSaved,
    costSavings,
    roi,
    efficiencyScore,
    riskLevel,
    recommendations,
    complianceNote,
  } = report;

  return (
    <div style={{ animation: "fadeIn 0.5s ease forwards" }}>
      <div style={styles.card}>

        {/* ── Report header ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <div style={styles.sectionLabel}>▸ Audit Results — {meta.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={riskBadgeStyle(riskLevel)}>{riskLevel} Risk</span>
            <span style={{ fontSize: 12, color: "#475569" }}>{meta.generatedAt}</span>
          </div>
        </div>

        {/* ── Metric tiles ── */}
        <div style={styles.metricGrid}>
          <MetricCard
            value={`${timeSaved}h`}
            label="Time Saved / Mo"
            color="#4ade80"
          />
          <MetricCard
            value={`$${costSavings.toLocaleString()}`}
            label="Cost Savings / Mo"
            color="#60a5fa"
          />
          <MetricCard
            value={`${roi}%`}
            label="ROI"
            color="#f59e0b"
          />
          <MetricCard
            value={`$${(costSavings - meta.spent).toLocaleString()}`}
            label="Net Gain / Mo"
            color="#a78bfa"
          />
        </div>

        {/* ── Efficiency score bar ── */}
        <div style={{ marginBottom: "1.5rem" }}>
          <ScoreBar score={efficiencyScore} />
        </div>

        <hr style={styles.divider} />

        {/* ── Executive summary ── */}
        <Section title="Executive Summary">
          <div style={styles.summaryBox}>{executiveSummary}</div>
        </Section>

        {/* ── Recommendations ── */}
        <Section title="Recommendations">
          <ul style={styles.recList}>
            {recommendations.map((rec, i) => (
              <li key={i} style={styles.recItem}>
                <span style={styles.recNumber}>{i + 1}</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </Section>

        <hr style={styles.divider} />

        {/* ── Compliance note ── */}
        <Section title="Compliance Note">
          <div style={{
            background: "rgba(248,113,113,0.06)",
            border: "1px solid rgba(248,113,113,0.2)",
            borderRadius: 10,
            padding: "1rem",
            fontSize: 13,
            color: "#cbd5e1",
            lineHeight: 1.6,
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}>
            <span style={{ fontSize: 16, marginTop: 1 }}>🔒</span>
            {complianceNote}
          </div>
        </Section>

        {/* ── Submission metadata ── */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 10,
          padding: "0.75rem 1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: 13,
          color: "#64748b",
          marginBottom: "1.5rem",
        }}>
          <span>🤖 <strong style={{ color: "#94a3b8" }}>{meta.tool}</strong></span>
          <span>💳 Spend: <strong style={{ color: "#94a3b8" }}>${meta.spent}/mo</strong></span>
          <span>🎯 Purpose: <strong style={{ color: "#94a3b8" }}>{meta.purpose}</strong></span>
          <span>📧 <strong style={{ color: "#94a3b8" }}>{meta.email}</strong></span>
        </div>

        {/* ── Download button ── */}
        <button
          className="audit-btn"
          style={styles.downloadBtn}
          onClick={() => downloadReportAsTxt(report)}
        >
          ⬇ Download Audit Report (.txt)
        </button>

      </div>
    </div>
  );
}

// ── Tiny section wrapper ───────────────────────
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ ...styles.sectionLabel, marginBottom: "0.75rem" }}>{title}</div>
      {children}
    </div>
  );
}