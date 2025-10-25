
import { GoogleGenAI } from "@google/genai";

export const genController = async (context, query) => {
 
  const ai = new GoogleGenAI({apiKey: process.env.GENAI_API_KEY});
  
  
  const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert AI assistant. Based on the following context: ${context}, answer the question: ${query}. Provide a clear, concise, and helpful response using only the information from the context.`
  });
  
    return response.candidates[0].content.parts[0].text;
};

