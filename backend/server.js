const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const carRoutes = require("./routes/car-routes");

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use("/api", userRoutes);
app.use("/api", carRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
