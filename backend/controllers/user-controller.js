const User = require("../models/User");

exports.createUser = (req, res) => {
  const name = "Harry Maguire";
  const email = "test2@test2.com";
  const city = "Montreal";
  const phoneNumber = 5141112222;
  const registeredVehicles = [];
  const rentedVehicles = [];

  User.findOne({ email })
    .then((user) => {
      // if user with this email already exists
      if (user) {
        return res
          .status(422)
          .json({ alertMessage: "user with this email already exists!" });
      }
      const newUser = new User({
        name: name,
        email: email,
        city: city,
        phoneNumber: phoneNumber,
        registeredVehicles: registeredVehicles,
        rentedVehicles: rentedVehicles
      });
      newUser.save().then((savedUser) => {
        res.status(200).send(savedUser);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "internal server error has occured."});
    });
};
