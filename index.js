// Importing the 'express' module and creating an Express application.
const express = require("express");
const app = express();

// Setting the port for the server to listen on.
const port = 8000;

const db = require("./config/mongoose");
// const bodyParser = require("body-parser");

// Parsing the URL-encoded data sent by forms.
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded());

// Using the routes defined in './routes'.
app.use("/", require("./routes"));

// Starting the server and listening on the specified port.
app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
