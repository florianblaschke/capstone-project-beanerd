import mongoose from "mongoose";

const { Schema } = mongoose;

const scoreSchema = new Schema({
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Score = mongoose.models.Score || mongoose.model("Score", scoreSchema);

export default Score;
