const express = require("express");
const userView = require("../models/userModels");
const fs = require('fs');
const router = express.Router();
const dataPath = "./backend"; // Kildehenvisning til Mads Holmvang


// CRUD-endpoints

// Får informationer for brugeren
router.get("/", (req, res) => {
});

// Sletter Brugeren
router.delete("/", (req, res) =>{
});

// Opdaterer Brugeren
router.put("/", (req, res) => {
});

// Opretter en bruger
router.post("/User/register", (req, res) => {

    // Vi giver den en id, som er Datoen lavet om til en string
const userID = Date.now().toString();
var firstname = req.body.firstname;
var lastname = req.body.lastname;
var password = req.body.password;
var email = req.body.email;
var cpr = req.body.cpr;
var gender = req.body.gender;

// Vi laver det input vi får i userID, til strings.
let err = "Kunne ikke oprette bruger"
let datapath = JSON.stringify(userID);

// Vi laver en eventlistener, som kører funktionen når vi klikker, på knappen.
document.getElementById("regButton").addEventListener("submit", function() {
// Vi brugeren bliver oprettet, bliver den sendt til datapath(backend), som en json fil
fs.writeFileSync(dataPath,'User1.json', datapath) 


});

})

module.exports = userView