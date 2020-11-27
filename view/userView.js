const express = require("express");
const userView = require("../models/userModels");
const fs = require('fs');
const router = express.Router();

const dataPath = "./backend/" // Kildehenvisning til Mads Holmvang


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
firstname = req.body.firstname
lastname = req.body.lastname
password = req.body.password
email = req.body.email
cpr = req.body.email
gender = req.body.gender


// Vi brugeren bliver oprettet, bliver den sendt til datapath, som en json fil
let datapath = JSON.stringify(userID);
fs.writeFileSync(dataPath + 'User1.json')

});

exports.userView