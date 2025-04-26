// Imports the express module.
const express = require('express');
// Creates an instance of an Express application.
const app = express();

// Defines the port the server will listen on.
const port = process.env.PORT || 3000;

// Uses the routes defined in the "/routes" folder for all requests to "/".
app.use('/', require('./routes'));

// Starts the server and logs a message to the console.
app.listen(port, () => {
    console.log(`Server is running on port ${port}. Go to http://localhost:${port} to view it.`)
})