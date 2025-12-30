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
    rating: {
      type: Number,
      default: 0,
    },
    complectation: [
      {
        type: Schema.Types.ObjectId,
        ref: "Complectation",
      },
    ],
    specifications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Specification",
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default mongoose.model("Product", productSchema);
