const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express()
const userControllers = require("./controllers/userControllers.js");
const matchControllers = require("./controllers/matchControllers.js");

// Vi starter serveren




// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');



// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/Match', matchControllers); // endpoint

