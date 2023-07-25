const express = require("express");
const router = express.Router();
const productControllerApi = require("../../controllers/api/products_api");

router.post("/create", productControllerApi.create);
router.get("/", productControllerApi.products);
router.delete("/delete/:id", productControllerApi.delete);

module.exports = router;
