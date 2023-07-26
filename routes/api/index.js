const express = require("express");
const router = express.Router();

// Use the "/products" prefix for all routes related to products
router.use("/products", require("./products"));

// Export the router to be used in other parts of the application
module.exports = router;
