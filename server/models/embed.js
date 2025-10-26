import mongoose from "mongoose";
const { Schema } = mongoose;

const embeddingDataSchema = new Schema(
  {
    text: String,
    embedding: [Number],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  },
  { timestamps: true }
);

export const embeddingData = mongoose.model(
  "embeddingData",
  embeddingDataSchema
);
