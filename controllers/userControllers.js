const express = require("express");
const router = express.Router();
const user = require("../models/userModels");

//Vi får (GET) Usersne
router.get("/", (req, res) => {

    res.json(user.allUsers);
   
   });
   
   // Vi sletter inputtet, til en tom string
   router.delete("/", (req, res) => {
   user.allUsers = [];
   res.json({"message": "Deleted user"})
   
   });
   
   // Her poster (laver vi en bruger)
   router.post("/", (req, res) =>{
   user.allUsers = [user.allUsers];
   res.json({"message": "Created user"})
   });
   
   
   // brugeren bliver opdateret
   router.put("/", (req, res) =>{
       user.allUsers = [user.allUsers];
       res.json({"message": "Updated User!"})
       });

module.exports = router;