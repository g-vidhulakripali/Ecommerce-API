const Product = require("../../models/productSchema");

module.exports.create = async function (req, res) {
  try {
    const product = await Product.create({
      name: req.body.name,
      quantity: req.body.quantity,
    });

    return res.status(201).json({
      message: `Product has been successfully Created`,
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
        message: "Products is empty - No Content Found",
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
