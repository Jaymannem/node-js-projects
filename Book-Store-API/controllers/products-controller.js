const Products = require("../models/products");

async function addNewProduct(req, res) {
  try {
    const productFormData = req.body;
    const addNewProduct = await Products.create(productFormData);
    if (productFormData) {
      res.status(201).json({
        success: true,
        message: "Product added successfully!",
        data: addNewProduct,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function getAllProducts(req, res) {
  try {
    const allProducts = await Products.find({});
    if (allProducts?.length > 0) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: allProducts,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Products not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function getSingleProduct(req, res) {
  try {
    const getProductId = req.params.id;
    const product = await Products.findById(getProductId);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product is not found with ID, Please try with another",
      });
    } else {
      res.status(200).json({
        success: true,
        data: product,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function updateProduct(req, res) {
  try {
    const productFormData = req.body;
    const getProductId = req.params.id;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function deleteProduct(req, res) {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

module.exports = {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
