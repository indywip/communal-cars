const User = require("../models/User");

exports.createUser = (req, res) => {
  const name = "Steven Gerrard";
  const email = "test@test.com";
  const city = "Toronto";

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
