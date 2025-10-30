import mongoose from "mongoose";
const { Schema } = mongoose;

const embeddingDataSchema = new Schema({
  text: String,
  embedding: [Number],
  title: String,
});

export const embeddingData = mongoose.model(
  "embeddingData",
  embeddingDataSchema
);
