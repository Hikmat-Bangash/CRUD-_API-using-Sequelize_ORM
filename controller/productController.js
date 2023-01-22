
// const db = require("../models");
import db from "../models/ProductModel.js"
console.log(db)
// create main model
const Product = db.products;

// create product
export const addProduct = async (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a product
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // save Product in the database
  try {
    const product = await Product.create(info);
    res.status(200).send(product);
    console.log(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  }
};

// get all products
export const getAllProducts = async (req, res) => {
  // let products = await Product.findAll({
  //     attributes: [
  //         'title',
  //         'price'
  //     ]
  // });

  let products = await Product.findAll({});
  res.status(200).send(products);
  console.log(products);
};

// get single products
export const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update a product
export const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send('Product is Updated');
};

// delete a product
export const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product is deleted");
};

// get published product
export const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

