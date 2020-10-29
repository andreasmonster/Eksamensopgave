const express = require('express');
const router = express.Router();


// Interesse klasse (beskrivelse)

class Interest{
    constructor(gender, location, food){
        this.gender = gender;
        this.location = location;
        this.food = food;
    }
}

// Interesse variabler for User

var interest1 = new Interest ('gender', 'location','food');
var interest2 = new Interest ('gender', 'location','food');
var interest3 = new Interest ('gender', 'location','food');
var interest4 = new Interest ('gender', 'location','food');


exports.userInterest = [interest1, interest3, interest4, interest5];
exports.updateInterest = [interest3, interest4]