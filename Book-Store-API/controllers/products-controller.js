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
    const updateProduct = await Products.findByIdAndUpdate(
      getProductId,
      productFormData,
      {
        new: true,
      }
    );
    if(!updateProduct) {
      res.status(404).json({
      success: false,
      message: "Product with the current ID is not found! Please try with a different ID"
    })
    } else {
      res.status(200).json({
        success: true, 
        message: 'product updated!',
        data: updateProduct
      })
    }
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
    const getProductId = req.params.id;
    const deleteProduct = await Products.findByIdAndDelete(getProductId);
    if(!deleteProduct) {
      res.status(404).json({
        success: false, 
        message: "Product with the current ID is not found! Please try with other ID"
      })
    } else {
      res.status(200).json({
        success: true, 
        message: "Product deleted successfully!",
        data: deleteProduct
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function getProductsCount(req, res) {
  try {
    const productsCount = await Products.countDocuments();
    console.log("productsCount", productsCount)
    if(productsCount) {
      res.status(200).json({
        success: true, 
        message: "Fetched total products count successfully!",
        data: { count: productsCount}
      })
    } else {
      res.status(404).json({
        success: false, 
        message: 'Unable to fetch the products count'
      })
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again."
    })
  }
}

module.exports = {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductsCount
};
