const express = require("express");
const carController = require('../controllers/car-controller');

const Router = express.Router();

Router.post('/register-car', carController.registerCar);
Router.get('/get-cars', carController.getCars);

module.exports = Router;