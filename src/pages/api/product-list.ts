import type { NextApiRequest, NextApiResponse } from "next";
import ProductList from "../../models/productList.model";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await mongoose.connect(uri);
    await ProductList.find()
      .then((productList) => res.json(productList))
      .catch((err) => res.status(400).json("Error: " + err));
    await mongoose.disconnect();
  }

  if (req.method === "POST") {
    await mongoose.connect(uri);
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const category = req.body.category;
    const environment = req.body.environment;
    const stock = req.body.stock;

    const newProduct = new ProductList({
      id,
      name,
      description,
      price,
      image,
      category,
      environment,
      stock,
    });

    newProduct
      .save()
      .then(() => res.json("Product added!"))
      .catch((err) => res.status(400).json("Error: " + err));

    await mongoose.disconnect();
  }
}
