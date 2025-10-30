import express from "express";
import { VoyageAIClient } from "voyageai";
import { embeddingData } from "../models/embed.js";
import { genController, semanticChunks } from "./genAi.js";
import { slideWindowChunking } from "./chunking.js";

const uploadController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No data received" });
    }

    // const chunks = slideWindowChunking(text);
    const semanticChunkedData = await semanticChunks(text);
    const chunkedData = semanticChunkedData.json();
    console.log("Semantic Chunked Data:", chunkedData);

    // const client = new VoyageAIClient({ apiKey: process.env.VOYAGEAI_API_KEY });

    // const embed = await client.embed({
    //   input: text,
    //   model: "voyage-3-large",
    // });

    // const embedding = new embeddingData({
    //   text: text,
    //   embedding: embed.data[0].embedding,
    // });
    // await embedding.save();
    // console.log("Embedding result:", embed);

    res.status(200).json({
      message: "Text embedded and saved successfully",
      data: chunkedData,
    });
  } catch (error) {
    console.error("Error in uploadController:", error);
    return res.status(500).json({
      error: "Server error while generating embedding",
      details: error.message,
    });
  }
};

const searchController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No data received" });
    }

    const client = new VoyageAIClient({ apiKey: process.env.VOYAGEAI_API_KEY });

    const embed = await client.embed({
      input: text,
      model: "voyage-3-large",
    });
    //

    const searchEmbedding = await embeddingData.aggregate([
      {
        $vectorSearch: {
          index: "chatapp",
          queryVector: embed.data[0].embedding,
          path: "embedding",
          numCandidates: 10,
          limit: 4,
        },
      },
      {
        $project: {
          text: 1,
          _id: 0,
          score: { $meta: "vectorSearchScore" },
        },
      },
      {
        $match: {
          score: { $gte: 0.65 },
        },
      },
    ]);

    const filteredData = searchEmbedding
      .map((item) => {
        return item.text;
      })
      .join(" ");

    const result = await genController(filteredData, text);

    res.status(200).json({
      message: "Vector search completed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in uploadController:", error);
    return res.status(500).json({
      error: "Server error while generating embedding",
      details: error.message,
    });
  }
};

export { uploadController, searchController };
