// Creates a new router instance from Express.
const routes = require('express').Router();

// Imports the controller functions.
const myController = require('../controllers');

// Defines a GET route for the root path ('/') and uses the controller to handle it.
routes.get('/', myController.strongPrettyWoman);

// Exports the router to be used in the main server file.
module.exports = routes;