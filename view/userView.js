const express = require("express");
const userView = require("../models/userModels");
const router = express.Router();



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
router.post("/", (req, res) => {
});

exports.userView