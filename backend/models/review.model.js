import mongoose, { Schema } from "mongoose";

const reviewModel = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    text: String,
    rating: {
      type: Number,
      max: 5,
      min: 1,
      required: true,
    },
    images: [String],
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default mongoose.model("Review", reviewModel);
