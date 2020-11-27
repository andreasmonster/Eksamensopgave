const http = require('http');
const express = require('express');
const app = express()
const fs = require('fs');
const userControllers = require("./controllers/userControllers.js");
const matchControllers = require("./controllers/matchControllers.js");

// Vi starter serveren
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Serveren kører\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');



// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/Match', matchControllers); // endpoint

