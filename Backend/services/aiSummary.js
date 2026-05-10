import OpenAI from "openai";

import auditSummaryPrompt
from "../utils/auditSummaryPrompt.js";
console.log(
  JSON.stringify(
    process.env.GROQ_API_KEY
  )
);


const generateAuditSummary =
async (findings, summary) => {
     const client = new OpenAI({

    apiKey:
      process.env.GROQ_API_KEY,

    baseURL:
      "https://api.groq.com/openai/v1"
  });

  const prompt =
    auditSummaryPrompt(
      findings,
      summary
    );

  const response =
    await client.chat.completions.create({

      model:
        "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: prompt
        }
      ]

    });

  return response
    .choices[0]
    .message
    .content;
};

export default generateAuditSummary;