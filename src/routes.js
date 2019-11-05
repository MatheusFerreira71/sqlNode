const express = require("express");
const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('users/:user_id/adresses', AdressController.store);

module.exports = routes;