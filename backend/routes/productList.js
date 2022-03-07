const router = require("express").Router();
let ProductList = require("../models/productList.model");

router.route("/").get((req, res) => {
  ProductList.find()
    .then((productList) => res.json(productList))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
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
});

router.route("/:id").get((req, res) => {
  ProductList.findById(req.params.id)
    .then((productList) => res.json(productList))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  ProductList.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  ProductList.findById(req.params.id)
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
});

module.exports = router;
