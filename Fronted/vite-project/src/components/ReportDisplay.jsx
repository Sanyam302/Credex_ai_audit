
import { styles, riskBadgeStyle } from "../styles.js";
import {
  downloadReportAsPDF
}
from "../utils/downloadpdf.js";


export default function
ReportDisplay({ report }) {

  const {
    summary,
    aiSummary
  } = report;



  return (

    <div
      style={{
        animation:
          "fadeIn 0.5s ease forwards"
      }}
    >

      <div style={styles.card}>



        {/* HEADER */}
        <div
          style={{
            marginBottom: "2rem"
          }}
        >

          <div style={styles.sectionLabel}>
            ▸ Audit Results
          </div>

          <h2
            style={{
              fontSize: "2.2rem",
              margin: "12px 0",
              color: "#fff",
              lineHeight: 1.2
            }}
          >
            $
            {
              summary
              .totalAnnualSavings
            }
            /year savings identified
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1rem"
            }}
          >
            Monthly optimization opportunity:
            {" "}
            $
            {
              summary
              .totalMonthlySavings
            }
          </p>

        </div>



        {/* SUMMARY CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",

            gap: "1rem",

            marginBottom: "2rem"
          }}
        >

          <MetricCard
            title="Monthly Spend"
            value={
              `$${summary.totalMonthlySpend}`
            }
          />

          <MetricCard
            title="Monthly Savings"
            value={
              `$${summary.totalMonthlySavings}`
            }
          />

          <MetricCard
            title="Annual Savings"
            value={
              `$${summary.totalAnnualSavings}`
            }
          />

        </div>



        {/* AI SUMMARY */}
        <div>

          <div
            style={{
              ...styles.sectionLabel,
              marginBottom: "1rem"
            }}
          >
            Executive Summary
          </div>

          <div style={styles.summaryBox}>
            {aiSummary}
          </div>

        </div>
        <button
  className="audit-btn"
  style={styles.downloadBtn}
  onClick={() =>
    downloadReportAsPDF(report)
  }
>

  ⬇ Download PDF Report

</button>
      </div>

    </div>
  );
}



/* SIMPLE METRIC CARD */
function MetricCard({
  title,
  value
}) {

  return (

    <div
      style={{
        background:
          "rgba(255,255,255,0.03)",

        border:
          "1px solid rgba(255,255,255,0.06)",

        borderRadius: 14,

        padding: "1.25rem"
      }}
    >

      <p
        style={{
          color: "#64748b",
          marginBottom: 8,
          fontSize: 13
        }}
      >
        {title}
      </p>

      <h3
        style={{
          margin: 0,
          color: "#fff",
          fontSize: "1.5rem"
        }}
      >
        {value}
      </h3>

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