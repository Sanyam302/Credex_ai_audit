import rules from "./Audit.js";

const runAudit = (data) => {

  const findings = [];

  data.tools.forEach((tool) => {

    // Get all matched rules
    const matchedRules = rules.filter((rule) =>
      rule.condition(tool, data)
    );

    // Sort by priority
    matchedRules.sort(
      (a, b) => a.priority - b.priority
    );

    // Highest priority rule
    const primaryRule =
      matchedRules[0];

    // Remaining lower-priority rules
    const secondaryRules =
      matchedRules.slice(1);

    if(primaryRule) {

      const monthlySavings =
        primaryRule.calculateSavings(
          tool,
          data
        );

      findings.push({

        tool: tool.tool,

        currentPlan: tool.plan,

        currentSpend:
          tool.monthlySpend,



        // =========================================
        // PRIMARY RECOMMENDATION
        // =========================================

        primaryRecommendation: {

          recommendation:
            typeof primaryRule.recommendation === "function"
              ? primaryRule.recommendation(tool)
              : primaryRule.recommendation,

          reason:
            primaryRule.reason,

          financeExplanation:
            primaryRule.financeExplanation,

          confidence:
            primaryRule.confidence,

          severity:
            primaryRule.severity,

          savingsType:
            primaryRule.savingsType,

          monthlySavings,

          annualSavings:
            monthlySavings * 12
        },



        // =========================================
        // SECONDARY SUGGESTIONS
        // =========================================

        additionalSuggestions:

          secondaryRules.map((rule) => ({

            recommendation:
              typeof rule.recommendation === "function"
                ? rule.recommendation(tool)
                : rule.recommendation,

            reason:
              rule.reason,

            financeExplanation:
              rule.financeExplanation,

            confidence:
              rule.confidence,

            severity:
              rule.severity

          }))

      });

    }

  });

  return findings;
};

export default runAudit;