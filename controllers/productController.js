const VeterinaryProduct = require('../models/productModel');

// Controller function to get all veterinary products
const getAllProducts = async (req, res) => {
  try {
    const products = await VeterinaryProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new veterinary product
const createProduct = async (req, res) => {
  const {
    name,
    category,
    mg,
    animal,
    diseases,
    maxDose,
    prescriptionNeeded,
    price,
    expiryDate,
    manufactureDate,
    minQuantity
  } = req.body;

  try {
    const newProduct = new VeterinaryProduct({
      name,
      category,
      mg,
      animal,
      diseases,
      maxDose,
      prescriptionNeeded,
      price,
      expiryDate,
      manufactureDate,
      minQuantity
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
  getAllProducts,
  createProduct
};
