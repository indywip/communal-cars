const Car = require("../models/Car");
const User = require("../models/User");

exports.registerCar = (req, res) => {
  const userId = "6300efa54ae2ae9506f7f815";
  const brand = "Honda";
  const model = "A5";
  const notes = "Please make sure to return the car by the indicated time.";
  const price = 50;
  const availability = "12pm - 5pm"; // Not sure if I should store it as Date type or just a string.
  const location = "Toronto";
  const newCar = Car({
    brand: brand,
    model: model,
    notes: notes,
    price: price,
    availability: availability,
    location: location,
    userId: userId,
  });
  newCar
    .save()
    .then((savedCar) => {
      console.log(savedCar);
      res
        .status(200)
        .json({ successMessage: "Succesfully registered the car." });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.getCars = (req, res) => {
  Car.find()
    .then((cars) => {
        // returns an array of Car objects
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};
