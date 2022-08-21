const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const vehicleRoutes = require("./routes/vehicle-routes");

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

const app = express();
const Twilio = require('twilio');
const express = require('express');
const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})
/*
app.get('/token/:identity', (req, res) => {
  const identity = req.params.identity;
  const token = new AccessToken(
    '',
    '',
    '',
  );
  console.log(token,token.identity)

  token.identity = identity;
  token.addGrant(
    new ChatGrant({
      serviceSid: '',
    }),
  );

  res.send({
    identity: token.identity,
    jwt: token.toJwt(),
  });
}); */

app.use("/api", userRoutes);
app.use("/api/vehicles", vehicleRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
