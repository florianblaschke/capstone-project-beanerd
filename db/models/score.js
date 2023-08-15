import mongoose from "mongoose";

const { Schema } = mongoose;

const scoreSchema = new Schema({
  userId: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 100 },
});

const Score = mongoose.models.Score || mongoose.model("Score", scoreSchema);

export default Score;
