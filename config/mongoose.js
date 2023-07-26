const mongoose = require("mongoose");

// Connect to MongoDB database using local connection string
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-api-db");

// Connect to MongoDB database using MongoDB Atlas cloud connection string
mongoose.connect(
  "mongodb+srv://gvidhulakripali:Oey4aY6N1BI9N57K@cluster0.squt5dz.mongodb.net/ecommerce-api-db"
);

const db = mongoose.connection;

// Event listener for MongoDB connection error
db.on("error", console.log.bind(console, "Error connecting to MongoDB"));

// Event listener for successful MongoDB connection
db.once("open", function () {
  console.log("Connected to Database:: MongoDB");
});

// Export the database connection object
module.exports = db;
