const Vehicle = require("../models/Vehicle");
const User = require("../models/User");

exports.registerVehicle = (req, res) => {
  const userId = req.body.userId;
  // const userId = req.params.userId;
  const brand = req.body.brand;
  const model = req.body.model;
  const notes = req.body.notes;
  const price = req.body.rate;
  const availability = req.body.availability; // Not sure if I should store it as Date type or just a string.
  const location = req.body.location;
  const newVehicle = Vehicle({
    brand: brand,
    model: model,
    notes: notes,
    price: price,
    availability: availability,
    location: location,
    userId: userId,
    isRented: false,
  });
  newVehicle
    .save()
    .then((savedVehicle) => {
      console.log(savedVehicle._id);
      User.findById(userId)
        .then((user) => {
          const vehicleId = savedVehicle._id;
          console.log(vehicleId);
          user.registeredVehicles.push(vehicleId);
          console.log("updated user.registeredVehicles: ", user);
          // update user.registeredVehicles
          return user.save();
        })
        .then((result) => {
          return res
            .status(200)
            .json({ successMessage: "Succesfully registered the vehicle." });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ errorMessage: "internal server error has occured." });
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.rentVehicle = (req, res) => {
  // send userId and vehicleId
  const userId = req.body.userId;
  const vehicleId = req.body.vehicleId;
  console.log(req.body);
  User.findById(userId)
    .then((user) => {
      console.log(user);
      user.rentedVehicles.push(vehicleId);
      return user.save();
    })
    .then((result) => {
      return Vehicle.findById(vehicleId);
    })
    .then((vehicle) => {
      vehicle.isRented = true;
      return vehicle.save();
    })
    .then(
      res
        .status(200)
        .json({ successMessage: "Succesfully rented the vehicle." })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.getVehicles = (req, res) => {
  Vehicle.find()
    .then((vehicles) => {
      // returns an array of Vehicle objects
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.getVehicle = (req, res) => {
  // attach vehicleId to path parameter when calling the api
  // api/get-vehicle/vehicleId
  const vehicleId = req.params.vehicleId;
  Vehicle.findOne({ vehicleId: vehicleId })
    .then((vehicle) => {
      // userId will be populated.
      // userId field will contain a full user document.
      return vehicle.populate("userId");
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.getRegisteredVehicles = (req, res) => {
  // get vehicles registered by a SPECIFIC user
  // attach userId as path parameter when calling the api
  // api/get-registered-vehicles/
  const userId = req.params.userId;
  Vehicle.find({ userId: userId })
    .then((vehicles) => {
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};

exports.deleteVehicle = (req, res) => {
  // attach vehicleId as path parameter when calling the api
  // api/delete-vehicle/vehicleId/userId
  const vehicleId = req.params.vehicleId;
  const userId = req.params.userId;
  Vehicle.findByIdAndDelete(vehicleId)
    .then((result) => {
      return User.findById(userId);
    })
    .then((user) => {
      const updatedVehicles = user.registeredVehicles.filter((vehicle) => {
        return vehicle.toString() !== vehicle.toString();
      });
      user.registeredVehicles = updatedVehicles;
      return user.save();
    })
    .then((result) => {
      res
        .status(200)
        .json({ successMessage: "Succesfully deleted the vehicle." });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "internal server error has occured." });
    });
};
