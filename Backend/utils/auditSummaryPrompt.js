const auditSummaryPrompt = (
  findings,
  summary
) => {

  const formattedFindings =
    findings.map((finding) => {

      return `

Tool: ${finding.tool}

Current Plan:
${finding.currentPlan}

Recommendation:
${finding.primaryRecommendation.recommendation}

Monthly Savings:
$${finding.primaryRecommendation.monthlySavings}

Reason:
${finding.primaryRecommendation.reason}

`;
    }).join("\n");



  return `

You are an AI SaaS financial audit assistant.

Generate a professional executive audit summary.

Total Monthly Savings:
$${summary.totalMonthlySavings}

Total Annual Savings:
$${summary.totalAnnualSavings}

Audit Findings:
${formattedFindings}

Requirements:
- professional tone
- concise
- financially realistic
- no hype
- no exaggeration
- sound like a SaaS finance consultant
- maximum 2 short paragraphs

`;

};

export default auditSummaryPrompt;