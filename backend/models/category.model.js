import mongoose, { Schema } from "mongoose";

const categoryModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
});

export default mongoose.model("Category", categoryModel);
