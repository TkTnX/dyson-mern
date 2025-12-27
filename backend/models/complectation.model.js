import mongoose, { Schema } from "mongoose";

const complectationModel = new Schema({
  image: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Complectation", complectationModel);
