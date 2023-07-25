const Product = require("../../models/productSchema");

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
      message: `Error in creating the Product- Internal Server Error`,
    });
  }
};

module.exports.products = async function (req, res) {
  try {
    const products = await Product.find({});
    if (!products.length) {
      return res.status(200).json({
        message: "Products is empty - No Content Found! Create a new one!",
      });
    }
    return res.status(200).json({
      products,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Error in fetching the Product- Internal Server Error`,
    });
  }
};

module.exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // console.log("Succeess", product);
    return res.status(200).json({
      message: `Product has been successfully Deleted!`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unable to delete the product- Internal Server Error`,
    });
  }
};
