
const express = require('express');
const fs = require('fs');
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(bodyparser.json()) // Bodyparser fjerner strings
app.use(cors())

// Require for Routes
const userControllers = require("./controllers/userControllers.js");
const matchControllers = require("./controllers/matchControllers.js");
const userView = require("./view/userView");



// Vi starter serveren, på port 3000
app.listen(3000)
console.log("Server running on port 3000")


// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/Match', matchControllers); // endpoint
app.use('/User/register', userView); //endpoints

