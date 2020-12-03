const express = require("express");
const router = express.Router();
const fs = require("fs");
const dataPath = "./backend";

router.post("/", (req, res) => {

    fs.readdir(dataPath, (err, files) => {
        var sent = false;
        let allMatches = []
        for(i = 0; files.length > i; i++){
            
            if(sent == false) {
         files.forEach(file => {
            
    
        var userMatched = JSON.parse(fs.readFileSync(dataPath +"/"+file))
        var userMatchedValues = Object.values(userMatched)
        var userMatchedArray = userMatchedValues [6];
    
        

        var liked ="";
        
            
        for (i = 0; userMatchedArray.length > i; i++){
            liked = userMatchedArray[i]
 
                 if(req.body.like == userMatched.email && liked == req.body.email){
                    allMatches.push(userMatched.firstname)
                         }
                     }
                     sent = true;
                })
            }
        } 
        res.json(allMatches)
        });
      });  
    

module.exports = router;