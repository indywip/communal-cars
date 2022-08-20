const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
requrire("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())

app.get("/api/create-user", (req, res) => {
    res.send("test");
})

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
