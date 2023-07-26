const express = require("express");
const router = express.Router();

// Mount the "/api" route using the "index" router from the "api" folder
router.use("/api", require("./api/index"));

// Export the main router to be used in other parts of the application
module.exports = router;
