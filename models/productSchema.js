const mongoose = require("mongoose");

// Define the schema for a product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

// Create the "Product" model using the productSchema
const Product = mongoose.model("Product", productSchema);

// Export the "Product" model
module.exports = Product;
