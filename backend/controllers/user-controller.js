const User = require("../models/User");

exports.createUser = (req, res) => {
  // const email = "test2@test2.com";
  const name = req.body.name;
  const city = req.body.city;
  const registeredVehicles = [];
  const rentedVehicles = [];

  User.findOne({ name : name })
    .then((user) => {
  // if user already exists, login instead
  if (user) {
    return res
      .status(200)
      .json(user);
  }
  const newUser = new User({
    name: name,
    city: city,
    registeredVehicles: registeredVehicles,
    rentedVehicles: rentedVehicles,
  });
  newUser
    .save()
    .then((savedUser) => {
      res.status(200).json(savedUser);
    })
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};
