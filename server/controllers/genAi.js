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
You are an expert in semantic text chunking and document preprocessing for AI retrieval.

Task:
Split the text into meaningful chunks with metadata. 
Each chunk should keep full context and not break sentences.

Rules:
- Each chunk must be semantically complete.
- Average length: 100–200 wordsrs
.
- Include metadata: id, source, start_index, end_index, word_count, summary, and chunk.
- Respond with PURE JSON only. Do NOT include markdown formatting, explanations, or code fences.

Text:
${context}
`,
  });

  return response.candidates[0].content.parts[0].text;
};
