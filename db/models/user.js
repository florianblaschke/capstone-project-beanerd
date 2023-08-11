import mongoose from "mongoose";
import "./roast";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  roasts: { type: [Schema.Types.ObjectId], ref: "Roast" },
});

const methodsSchema = new Schema({
  methods: {
    method: { type: String },
    coffee: { type: String },
    water: { type: String },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Method =
  mongoose.models.Method || mongoose.model("Method", methodsSchema);

export default User;
