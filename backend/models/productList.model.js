const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productListSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    environment: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductList = mongoose.model("ProductList", productListSchema);

module.exports = ProductList;
