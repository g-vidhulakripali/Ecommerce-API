const Product = require("../../models/productSchema");

// Create a new product
module.exports.create = async function (req, res) {
  try {
    const product = await Product.create({
      name: req.body.name,
      quantity: req.body.quantity,
    });

    return res.status(201).json({
      message: `Product has been successfully Created!`,
      product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Error in creating the Product - Internal Server Error`,
    });
  }
};

// Fetch all products
module.exports.products = async function (req, res) {
  try {
    const products = await Product.find({});
    if (!products.length) {
      return res.status(404).json({
        message: "Products is empty - No Content Found! Create a new one!",
      });
    }
    return res.status(200).json({
      products,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Error in fetching the Product - Internal Server Error`,
    });
  }
};

// Delete a product by ID
module.exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: `Product has been successfully Deleted!`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unable to delete the product - Internal Server Error`,
    });
  }
};

// Update quantity of a product (can be incremented or decremented)
module.exports.update = async function (req, res) {
  const id = req.params.id;
  const number = req.query.number;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const updatedQuantity = parseInt(product.quantity) + parseInt(number);
    await Product.updateOne({ _id: id }, { quantity: updatedQuantity });

    return res.status(200).json({
      message: `Product has been successfully Updated!`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unable to update the product - Internal Server Error`,
    });
  }
};
