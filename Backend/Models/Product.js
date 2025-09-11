import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userinfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, 
    },
    image: {
      data: Buffer,
      filename: String,
      contentType: String,
    },
    category: {
      type: String,
      default: "General",
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true } 
);

const Product = mongoose.model("Product", productSchema);

export default Product;
