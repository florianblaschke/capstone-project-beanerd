import mongoose from "mongoose";
import "./score";
const { Schema } = mongoose;

const roastSchema = new Schema({
  name: { type: String, required: true },
  roaster: { type: String, required: true },
  arabica: { type: Number, required: true },
  robusta: { type: Number, required: true },
  level: { type: String, required: true },
  provenance: { type: String, required: true },
  score: { type: [Schema.Types.ObjectId], ref: "Score" },
});

const Roast = mongoose.models.Roast || mongoose.model("Roast", roastSchema);

export default Roast;
