import { GoogleGenAI } from "@google/genai";

export const genController = async (context, query) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are an expert AI assistant. Based on the following context: ${context}, answer the question: ${query}. Provide a clear, concise, and helpful response using only the information from the context.`,
  });

  return response.candidates[0].content.parts[0].text;
};

export const semanticChunks = async (context) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an expert in semantic text chunking.

Task:
Split the following text into meaningful chunks. Each chunk should keep full context and not break sentences.

Requirements:
- Return ONLY JSON.
- Each object must have:
  - "text": the chunk content
  - "metadata": an object containing ONLY your custom fields (e.g., keyWords)
- Do NOT include code fences, explanations, or extra fields.
- Average chunk length: 100–200 words, adjust naturally.

Example:

Input Text:
"Technology has changed the world in ways that were once unimaginable. AI tools are being used to write code, compose music, and even diagnose medical conditions with impressive accuracy. Education is also being transformed with online platforms and hybrid learning methods."

Expected Output:
[
  {
    "text": "Technology has changed the world in ways that were once unimaginable. AI tools are being used to write code, compose music, and even diagnose medical conditions with impressive accuracy.",
    "metadata": {
      "keyWords": ["technology", "AI", "innovation"]
    }
  },
  {
    "text": "Education is also being transformed with online platforms and hybrid learning methods.",
    "metadata": {
      "keyWords": ["education", "online learning", "hybrid model"]
    }
  }
]

Text to Chunk:
${context}
`,
  });

  return response.candidates[0].content.parts[0].text;
};
