const express = require("express");
const router = express.Router();
const matchControllers = require("../models/matchModels.js");

  // Vi får oplysninger om Match 
router.get("/", (req, res) => {

   res.json(matchControllers.myMatch);
  
  });


  // Vi sletter Match
router.delete("/", (req, res) => {
   matchControllers.myMatch= [];
   res.json({"message": "Deleted match"})
   
   });

   module.exports = router;