
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
const likeControllers = require("./controllers/likeControllers.js");
const dislikeControllers = require("./controllers/dislikeControllers.js");




// Vi starter serveren, på port 3000 //
app.listen(3000)
console.log("Server running on port 3000")


// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/match', matchControllers); // endpoint
app.use('/like', likeControllers); // Endpoint
app.use('/dislike', dislikeControllers); // Endpoint

