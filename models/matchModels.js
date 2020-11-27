const express = require("express");
const router = express.Router();
const userModels = require("./userModels.js");



// Match klasse
class Match{
    constructor(matchID) {
        this.matchID = matchID;

    }
}


// laver en Const Interesecton, som går ind og matcher PaymentUser1 interesse og myFreeUser1 Interesse
const intersection = userModels.allUsers;

// Hvis de har samme interesse, giver matchID en Match besked
if(intersection !==0){
    var matchID = "Match"
// Hvis matchID ikke har en interesse som matcher, giver den "No Match"
} else {
    var matchID = "No Match"

};

module.exports.myMatch = [matchID]