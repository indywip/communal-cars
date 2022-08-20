const express = require("express");
const userController = require('../controllers/user-controller');

const Router = express.Router();

Router.post('/create-user', userController.createUser);
// Router.get('/get-user', userController.getUser);

module.exports = Router;