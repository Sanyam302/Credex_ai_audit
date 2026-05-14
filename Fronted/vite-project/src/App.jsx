
// ─────────────────────────────────────────────
//  App.jsx — root component, owns all state
//  EDIT: page header text, footer text, initial form values
// ─────────────────────────────────────────────

import { useState }       from "react";
import AuditForm          from "./components/AuditForm.jsx";
import ReportDisplay      from "./components/ReportDisplay.jsx";
import { styles }         from "./styles.js";
import { validateForm, fetchAuditReport } from "./utils/Audithelpers.js";

// ── Initial empty form state ───────────────────
const EMPTY_FORM = {

  name: "",

  email: "",

  tool: "",

  plan: "",

  monthlySpend: "",

  primaryUseCase: "",

  seats: "",

  teamSize: ""
};

export default function App() {
  const [form,    setForm]    = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [report,  setReport]  = useState(null);
  const [error,   setError]   = useState("");

  // Update a single form field
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Validate → call API → store report
  async function handleSubmit() {
    const validationError = validateForm(form);
    if (validationError) { setError(validationError); return; }

    setError("");
    setLoading(true);
    setReport(null);

    try {
      

      const data = await fetchAuditReport(form);

      // Attach submission metadata so ReportDisplay + download can use it
      setReport({
        ...data,
        meta: {
          name:        form.name,
          email:       form.email,
          tool:        toolName,
          spent:       Number(form.amountSpent),
          purpose:     purposeName,
          team_size:   Number(form.team_size),
          generatedAt: new Date().toLocaleString(),
        },
      });
    } catch {
      setError("Failed to generate report. Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Global CSS (animations + input focus ring) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;700&display=swap');

        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeIn  { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes pulse   { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

        .audit-input:focus {
          border-color: rgba(29,158,117,0.6) !important;
          box-shadow: 0 0 0 3px rgba(29,158,117,0.12);
        }
        .audit-btn:hover  { opacity: 0.9; transform: translateY(-1px); }
        .audit-btn:active { transform: scale(0.98); }

        select option { background: #0d1b2a; color: #f1f5f9; }
      `}</style>

      <div style={styles.page}>
        <div style={styles.container}>

          {/* ── Page header ── */}
          <header style={styles.header}>
            <div style={styles.badge}>
              {/* Pulsing green dot */}
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#4ade80", display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              AI Audit System
            </div>

            {/* EDIT: change the main headline below */}
            <h1 style={styles.title}>Audit Your AI Spending</h1>

            {/* EDIT: change the subtitle below */}
            <p style={styles.subtitle}>
              Get a comprehensive ROI analysis and compliance report for your AI tool usage
            </p>
          </header>

          {/* ── Input form ── */}
          <AuditForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />

          {/* ── Loading placeholder ── */}
          {loading && (
            <div style={{ ...styles.card, textAlign: "center", padding: "3rem 1rem" }}>
              <p style={{ fontSize: 13, color: "#64748b", animation: "pulse 2s infinite", margin: "0 0 8px" }}>
                Claude is auditing your AI usage…
              </p>
              <p style={{ fontSize: 12, color: "#475569", margin: 0 }}>
                Calculating ROI · Assessing risk · Generating recommendations
              </p>
            </div>
          )}

          {/* ── Report (only shown after a successful API call) ── */}
          {report && !loading && (
            <ReportDisplay report={report} />
          )}

          {/* ── Footer ── */}
          <footer style={styles.footer}>
            AI Audit System 
          </footer>

        </div>
      </div>
    </>
  );
}