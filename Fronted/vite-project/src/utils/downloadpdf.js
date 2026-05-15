import jsPDF
from "jspdf";



export function
downloadReportAsPDF(report) {

  const doc =
    new jsPDF();



  const {
    summary,
    aiSummary
  } = report;



  let y = 20;



  doc.setFontSize(22);

  doc.text(
    "AI Audit Report",
    20,
    y
  );



  y += 15;



  doc.setFontSize(14);

  doc.text(
    `Monthly Spend: $${summary.totalMonthlySpend}`,
    20,
    y
  );



  y += 10;

  doc.text(
    `Monthly Savings: $${summary.totalMonthlySavings}`,
    20,
    y
  );



  y += 10;

  doc.text(
    `Annual Savings: $${summary.totalAnnualSavings}`,
    20,
    y
  );



  y += 20;



  doc.setFontSize(18);

  doc.text(
    "Executive Summary",
    20,
    y
  );



  y += 12;



  doc.setFontSize(12);



  const splitText =
    doc.splitTextToSize(
      aiSummary,
      170
    );



  doc.text(
    splitText,
    20,
    y
  );



  doc.save(
    "ai-audit-report.pdf"
  );
}