const express = require("express");
const {
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductsCount
} = require("../controllers/products-controller");

const router = express.Router();

router.get("/get", getAllProducts);
router.get("/get/count", getProductsCount);
router.get("/get/:id", getSingleProduct);
router.post("/add", addNewProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
