import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    discount: Number,
    isStock: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String],
    },
    complectation: {
      type: Schema.Types.ObjectId,
      ref: "Complectation",
    },
    specifications: {
      type: Schema.Types.ObjectId,
      ref: "Specification",
    },
    faq: {
      type: Schema.Types.ObjectId,
      ref: "Faq",
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
