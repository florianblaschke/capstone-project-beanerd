import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  favorites: [],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
