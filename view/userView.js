const express = require("express");
const User = require("../models/userModels");
const fs = require('fs');
const router = express.Router();
const err = "Error";

const dataPath = "./backend"; // Kildehenvisning til Mads Holmvang // Viser hvilken mappe, vi skal gemme JSON filerne til



// CRUD-endpoints

// Får informationer for brugeren
router.get("/interface", (req, res) => {
});

// Sletter Brugeren
router.delete("/", (req, res) =>{
});

// Opdaterer Brugeren
router.put("/", (req, res) => {
});


// Login funtkion
router.post("/login", (req, res) => {

    console.log(req.body)

// Let user går ind og finder emailen i json filen
let user = JSON.parse(fs.readFileSync(dataPath + "/"+req.body.email + ".json"))
console.log(user)
if(user.password == req.body.password){ // Hvis passwordet der bliver tastet, er det samme som det oprettede (req.body.passowrd)
    res.json(user) // Sender den det videre, som res.json (user)
} else  {
    res.json({err: "Error"}) // hvis password der er indtastet ikke matcher det vi har i JSON filen, thrower vi en error.
}

})

// Opretter en bruger
router.post("/", (req, res) => {

const createdUser = new User(req.body.firstname,
    req.body.lastname,
    req.body.age,
    req.body.email,
    req.body.password,
    req.body.gender
    )

// Vi brugeren bliver oprettet, bliver den sendt til datapath(backend), som en json fil
// Filnavnet, er emailen der bliver indtastet (req.body.email)
fs.writeFileSync(dataPath + "/"+req.body.email + ".json", JSON.stringify(createdUser)), err =>  {
    if (err) throw error;

} 
})

module.exports = router;