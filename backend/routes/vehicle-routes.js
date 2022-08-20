const express = require("express");
const vehicleController = require('../controllers/vehicle-controller');

const Router = express.Router();

// register a vehicle
Router.post('/register-vehicle', vehicleController.registerVehicle);

// rent a vehicle
// sets vehicle.isRented to true
Router.post('/rent-vehicle', vehicleController.rentVehicle);

// get all the vehicles
Router.get('/get-vehicles', vehicleController.getVehicles);

// get details of a vehicle
Router.get('/get-vehicle/:vehicleId', vehicleController.getVehicle);

// get vehicles registered by one specific user
Router.get('/get-registered-vehicles/:userId', vehicleController.getRegisteredVehicles);


module.exports = Router;