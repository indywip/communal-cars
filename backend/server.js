const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const vehicleRoutes = require("./routes/vehicle-routes");

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use("/api", userRoutes);
app.use("/api/vehicles", vehicleRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
