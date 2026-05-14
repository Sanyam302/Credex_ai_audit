import runAudit
from "../audit/Engine.js";

import generateAuditSummary
from "../services/aiSummary.js";

const auditController =
async (req, res) => {

  try {

    const data = req.body;



   

    const totalMonthlySpend =
      data.tools.reduce(
        (sum, tool) =>
          sum + tool.monthlySpend,
        0
      );



   

    data.totalMonthlySpend =
      totalMonthlySpend;





    const findings =
      runAudit(data);


    // TOTAL SAVINGS

    const totalMonthlySavings =
      findings.reduce(
        (sum, finding) =>
          sum +
          finding.primaryRecommendation.monthlySavings,
        0
      );

    const totalAnnualSavings =
      totalMonthlySavings * 12;





    const summary = {

      totalMonthlySpend,

      totalMonthlySavings,

      totalAnnualSavings
    };

    // GENERATE AI SUMMARY
    

    const aiSummary =
      await generateAuditSummary(
        findings,
        summary
      );


  console.log("AI Summary:", aiSummary);
  console.log("Findings:", findings);
  console

    res.status(200).json({

      success: true,

      summary,

      aiSummary,

      findings

    });



  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        "Failed to run audit"

    });

  }

};

export default auditController;