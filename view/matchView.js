const express = require("express");
const router = express.Router();
const matchView = require("../models/matchModels");



// CRUD-endpoints

// Får informationer for matchet
router.get("/", (req, res) => {

    res.json(matchView.myMatch)
});

// Sletter matchet
router.delete("/", (req, res) =>{

    matchView.myMatch = [];
    res.json({"message": "Deleted Match"})

});


exports = matchView;