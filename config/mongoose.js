const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-api-db");
mongoose.connect(
  "mongodb+srv://gvidhulakripali:Oey4aY6N1BI9N57K@cluster0.squt5dz.mongodb.net/ecommerce-api-db"
);
const db = mongoose.connection;
db.on("error", console.log.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Database:: MongoDB");
});

module.exports = db;
