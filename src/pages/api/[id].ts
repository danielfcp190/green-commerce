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
    await ProductList.findById(req.query.id)
      .then((productList) => res.json(productList))
      .catch((err) => res.status(400).json("Error: " + err));
    await mongoose.disconnect();
  }

  if (req.method === "PUT") {
    await mongoose.connect(uri);
    await ProductList.findById(req.query.id)
      .then((productList) => {
        productList.name = req.body.name;
        productList.description = req.body.description;
        productList.price = req.body.price;
        productList.image = req.body.image;
        productList.category = req.body.category;
        productList.environment = req.body.environment;
        productList.stock = req.body.stock;

        productList
          .save()
          .then(() => res.json("Exercise updated!"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));

    await mongoose.disconnect();
  }

  if (req.method === "DELETE") {
    await mongoose.connect(uri);
    await ProductList.findByIdAndDelete(req.query.id)
      .then(() => res.json("Exercise deleted"))
      .catch((err) => res.status(400).json("Error: " + err));
    await mongoose.disconnect();
  }
}
