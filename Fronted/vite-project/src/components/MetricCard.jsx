import { styles } from "../styles.js";

/**
 * Props:
 *   value  — the big number / text shown (string | number)
 *   label  — small caption below the value
 *   color  — CSS color for the value text
 */
export default function MetricCard({ value, label, color }) {
  return (
    <div style={styles.metricCard}>
      <div style={{ ...styles.metricValue, color }}>
        {value}
      </div>
      <div style={styles.metricLabel}>{label}</div>
    </div>
  );
}