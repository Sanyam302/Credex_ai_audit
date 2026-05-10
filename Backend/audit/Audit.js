import pricing from "./Pricing.js";

const rules = [

  // ======================================================
  // SMALL TEAM OVERPAYING FOR TEAM/BUSINESS PLANS
  // ======================================================

  {
    id: "small-team-team-plan-overkill",

    priority: 1,

    savingsType: "exact",

    condition: (tool, data) => {

      const expensivePlans = [
        "team",
        "business"
      ];

      return (
        expensivePlans.includes(tool.plan) &&
        data.teamSize <= 2
      );
    },

    recommendation: (tool) => {

      const downgradeMap = {
        chatgpt: "plus",
        claude: "pro",
        cursor: "pro",
        copilot: "individual",
        gemini: "pro",
        windsurf: "pro"
      };

      return `Downgrade to ${downgradeMap[tool.tool]}`;
    },

    reason:
      "Premium collaboration functionality may be underutilized for a team of this size.",

    financeExplanation:
      "Team and business subscriptions typically include centralized billing, collaboration workspaces, and administration controls. Smaller teams frequently do not utilize these features enough to justify higher recurring subscription costs.",

    confidence: "high",

    severity: "medium",

    calculateSavings: (tool) => {

      const downgradeMap = {
        chatgpt: "plus",
        claude: "pro",
        cursor: "pro",
        copilot: "individual",
        gemini: "pro",
        windsurf: "pro"
      };

      const cheaperPlan =
        downgradeMap[tool.tool];

      const currentPlanPrice =
        pricing[tool.tool][tool.plan];

      const cheaperPlanPrice =
        pricing[tool.tool][cheaperPlan];

      return (
        currentPlanPrice -
        cheaperPlanPrice
      ) * tool.seats;
    }
  },



  // ======================================================
  // ENTERPRISE OVERKILL
  // ======================================================

  {
    id: "enterprise-overkill",

    priority: 2,

    savingsType: "exact",

    condition: (tool, data) => {

      return (
        tool.plan === "enterprise" &&
        data.teamSize < 15
      );
    },

    recommendation:
      "Switch to Team or Business plan",

    reason:
      "Enterprise-grade governance and compliance functionality may exceed operational requirements.",

    financeExplanation:
      "Enterprise subscriptions are generally optimized for organizations requiring SSO, governance, audit logging, compliance, and advanced access management. Smaller organizations may not realize sufficient operational benefit from these features.",

    confidence: "high",

    severity: "high",

    calculateSavings: (tool) => {

      const enterpriseDowngradeMap = {
        chatgpt: "team",
        claude: "team",
        cursor: "business",
        copilot: "business"
      };

      const recommendedPlan =
        enterpriseDowngradeMap[tool.tool];

      if(!recommendedPlan) {
        return 0;
      }

      const currentPlanPrice =
        pricing[tool.tool][tool.plan];

      const recommendedPlanPrice =
        pricing[tool.tool][recommendedPlan];

      return (
        currentPlanPrice -
        recommendedPlanPrice
      ) * tool.seats;
    }
  },



  // ======================================================
  // API OVERSPENDING
  // ======================================================

  {
    id: "api-overspending",

    priority: 3,

    savingsType: "estimated",

    condition: (tool) => {

      return (
        (
          tool.tool === "openai-api" ||
          tool.tool === "anthropic-api" ||
          tool.plan === "api"
        ) &&
        tool.monthlySpend > 500
      );
    },

    recommendation:
      "Review API usage efficiency and model selection",

    reason:
      "Current API expenditure may indicate opportunities for optimization through lower-cost models or improved prompt efficiency.",

    financeExplanation:
      "Large recurring API bills may result from unnecessary premium model usage, excessive token consumption, or inefficient workflows. Savings are estimated because exact API optimization outcomes depend on workload and usage behavior.",

    confidence: "medium",

    severity: "high",

    calculateSavings: (tool) => {

      return Math.round(
        tool.monthlySpend * 0.15
      );
    }
  },



  // ======================================================
  // REDUNDANT GENERAL AI TOOLS
  // ======================================================

  {
    id: "redundant-ai-tools",

    priority: 4,

    savingsType: "exact",

    condition: (tool, data) => {

      const tools =
        data.tools.map(t => t.tool);

      const overlappingTools = [
        "chatgpt",
        "claude",
        "gemini"
      ];

      const overlapCount =
        overlappingTools.filter(t =>
          tools.includes(t)
        ).length;

      return overlapCount >= 3;
    },

    recommendation:
      "Reduce overlapping AI assistant subscriptions",

    reason:
      "Multiple general-purpose AI assistants may create redundant recurring expenses.",

    financeExplanation:
      "Organizations often maintain several overlapping conversational AI subscriptions despite substantial capability overlap. Consolidating overlapping tools may reduce recurring expenses without materially affecting productivity.",

    confidence: "medium",

    severity: "medium",

    calculateSavings: () => {

      return pricing.gemini.pro;
    }
  },



  // ======================================================
  // CODING TEAM USING GENERAL TOOLS
  // ======================================================

  {
    id: "coding-tool-optimization",

    priority: 5,

    savingsType: "informational",

    condition: (tool, data) => {

      return (
        (
          tool.tool === "chatgpt" ||
          tool.tool === "claude"
        ) &&
        data.useCase === "coding"
      );
    },

    recommendation:
      "Evaluate developer-focused tools such as Cursor or GitHub Copilot",

    reason:
      "Developer-oriented AI tooling may improve engineering workflows and coding productivity.",

    financeExplanation:
      "Engineering-focused AI products frequently provide IDE integrations, codebase awareness, and workflow optimizations that may improve software development efficiency relative to general-purpose conversational assistants.",

    confidence: "medium",

    severity: "low",

    calculateSavings: () => {

      return 0;
    }
  },



  // ======================================================
  // LOW SAVINGS / ALREADY OPTIMIZED
  // ======================================================

  {
    id: "already-optimized",

    priority: 999,

    savingsType: "informational",

    condition: (tool, data) => {

      return (
        data.totalMonthlySpend < 100
      );
    },

    recommendation:
      "Current AI tooling spend appears reasonably optimized",

    reason:
      "No major inefficiencies were identified based on the current subscription mix.",

    financeExplanation:
      "The organization’s current tooling costs appear proportionate to team size and operational requirements.",

    confidence: "high",

    severity: "low",

    calculateSavings: () => {

      return 0;
    }
  }

];

export default rules;