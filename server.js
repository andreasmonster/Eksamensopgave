const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express()
const userControllers = require("./controllers/userControllers.js");
const matchControllers = require("./controllers/matchControllers.js");

// Vi starter serveren



// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/Match', matchControllers); // endpoint

// Vi kører vores index-fil her.
fs.readFile('../Eksamensopgave/frontend/index.html', function (err, html) {

    if (err) throw err;    
// Laver en http server, der kører på port 3000 (localhost:3000)
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
    console.log('Node server running on port 3000');
});

