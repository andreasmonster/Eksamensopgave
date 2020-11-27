const { Router } = require("express");
const express = require("express");
const router = express.router();
const userControllers = require("../models/userModels");

//Vi får (GET) Usersne
router.get("/", (req, res) => {

    res.json(userControllers.allUsers);
   
   });
   
   // Vi sletter inputtet, til en tom string
   router.delete("/", (req, res) => {
   userControllers.allUsers = [];
   res.json({"message": "Deleted user"})
   
   });
   
   // Her poster (laver vi en bruger)
   router.post("/", (req, res) =>{
   userControllers.allUsers = [userControllers.allUsers];
   res.json({"message": "Created user"})
   });
   
   
   // brugeren bliver opdateret
   router.put("/", (req, res) =>{
       userControllers.allUsers = [userControllers.allUsers];
       res.json({"message": "Updated User!"})
       });


module.exports = userController;
module.exports = router;