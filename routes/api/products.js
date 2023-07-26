const express = require("express");
const router = express.Router();
const productControllerApi = require("../../controllers/api/products_api");

// POST request to create a new product
router.post("/create", productControllerApi.create);

// GET request to fetch all products
router.get("/", productControllerApi.products);

// DELETE request to delete a product by ID
router.delete("/delete/:id", productControllerApi.delete);

// POST request to update the quantity of a product by ID
router.post("/:id/update_quantity/", productControllerApi.update);

// Export the router to be used in other parts of the application
module.exports = router;
