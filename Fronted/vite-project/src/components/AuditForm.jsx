import { styles } from "../styles.js";
import { AI_TOOLS, PURPOSES ,PLANS} from "../constants.js";

export default function AuditForm({ form, onChange, onSubmit, loading, error }) {
  return (
    <div style={styles.card}>
      <div style={styles.sectionLabel}>▸ Submission Details</div>

      {/* Row 1 — Name + Email */}
      <div style={{ ...styles.grid2, marginBottom: "1.25rem" }}>
        <Field label="Full Name">
          <input
            className="audit-input"
            style={styles.input}
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="e.g. Priya Sharma"
          />
        </Field>

        <Field label="Email Address">
          <input
            className="audit-input"
            style={styles.input}
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@company.com"
          />
        </Field>
      </div>

{/* Row 2 — Tool + Plan */}
<div
  style={{
    ...styles.grid2,
    marginBottom: "1.25rem"
  }}
>

  <Field label="AI Tool">

    <select
      className="audit-input"
      style={styles.select}
      name="tool"
      value={form.tool}
      onChange={onChange}
    >

      <option value="">
        Select AI tool…
      </option>

     {AI_TOOLS.map((t) => (

  <option
    key={t.value}
    value={t.value}
  >
    {t.label}
  </option>

))}

    </select>

  </Field>



  <Field label="Current Plan">

    <select
      className="audit-input"
      style={styles.select}
      name="plan"
      value={form.plan}
      onChange={onChange}
    >

      <option value="">
        Select plan…
      </option>

      {PLANS.map((p) => (

  <option
    key={p.value}
    value={p.value}
  >
    {p.label}
  </option>

))}

    </select>

  </Field>

</div>



{/* Row 3 — Monthly Spend + Seats */}
<div
  style={{
    ...styles.grid2,
    marginBottom: "1.25rem"
  }}
>

  <Field label="Monthly Spend (USD)">

    <input
      className="audit-input"
      style={styles.input}
      name="monthlySpend"
      type="number"
      min="0"
      value={form.monthlySpend}
      onChange={onChange}
      placeholder="e.g. 120"
    />

  </Field>



  <Field label="Seats">

    <input
      className="audit-input"
      style={styles.input}
      type="number"
      name="seats"
      value={form.seats}
      onChange={onChange}
      placeholder="Enter seats"
      min="1"
    />

  </Field>

</div>



{/* Row 4 — Use Case + Team Size */}
<div
  style={{
    ...styles.grid2,
    marginBottom: "1.25rem"
  }}
>

  <Field label="Primary Use Case">

    <select
      className="audit-input"
      style={styles.select}
      name="primaryUseCase"
      value={form.primaryUseCase}
      onChange={onChange}
    >

      <option value="">
        Select primary use case…
      </option>

    {PURPOSES.map((p) => (

  <option
    key={p.value}
    value={p.value}
  >
    {p.label}
  </option>

))}

    </select>

  </Field>



  <Field label="Team Size">

    <input
      className="audit-input"
      style={styles.input}
      type="number"
      name="teamSize"
      value={form.teamSize}
      onChange={onChange}
      placeholder="Enter team size"
      min="1"
    />

  </Field>

</div>
      {/* Inline error message */}
      {error && <div style={styles.error}>⚠ {error}</div>}

      {/* Submit button */}
      <button
        className="audit-btn"
        style={{
          ...styles.primaryBtn,
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? (
          <>
            <div style={styles.spinner} />
            Analysing usage data…
          </>
        ) : (
          "⚡ Generate Audit Report"
        )}
      </button>
    </div>
  );
}

// ── Tiny helper wrapper for label + input ──────
function Field({ label, children }) {
  return (
    <div style={styles.fieldGroup}>
      <label style={styles.label}>{label}</label>
      {children}
    </div>
  );
}