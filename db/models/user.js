import mongoose from "mongoose";
import "./roast";
import "./method";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  roasts: { type: [Schema.Types.ObjectId], ref: "Roast" },
  methods: { type: [Schema.Types.ObjectId], ref: "Method" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
