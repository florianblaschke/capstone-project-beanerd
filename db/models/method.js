import mongoose from "mongoose";
import "./roast";

const { Schema } = mongoose;

const methodSchema = new Schema({
  roastIdForMethod: { type: String, required: true },
  method: { type: String, required: true },
  coffee: { type: Number, required: true, min: 1 },
  water: { type: Number, required: true, min: 1 },
  time: { type: Number, required: false, min: 1 },
  grind: { type: String, required: false },
});

const Method = mongoose.models.Method || mongoose.model("Method", methodSchema);

export default Method;
