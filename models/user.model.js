import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const userModel = model("usuarios", userSchema);
