import mongoose from 'mongoose';
const { Schema } = mongoose;

const embeddingDataSchema = new Schema({
  text: String,
  embedding: [Number]
});

export const embeddingData = mongoose.model('embeddingData', embeddingDataSchema);