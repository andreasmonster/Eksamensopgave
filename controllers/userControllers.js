const express = require("express");
const User = require("../models/userModels");
const fs = require('fs');
const router = express.Router();
const dataPath = "./backend"; // Kildehenvisning til Mads Holmvang // Viser hvilken mappe, vi skal gemme JSON filerne til








/*

  // Like Post
  router.post("/Like", (req, res) => {

    // Får emailen af den nuværende bruger, samt emailen på det potentielle match
    var potentialUserEmail = req.body[1]; // indekset i body-arrayet, i fetch
    var userEmail = req.body[0].email // Indekset i body-arreyet, i fetch.
   

    // Vi finder det potentielle match, via vedkommenes email i vores 'Backend'
    let potentialUser = JSON.parse(fs.readFileSync(dataPath +"/"+ potentialUserEmail.email + ".json"));

    console.log(potentialUser);
    // Vi får fat, i de gamle dislikes fra vores 'Backend' mappe.
    var potentialUserValuesOld = Object.values(potentialUser)
    var oldArray = potentialUserValuesOld[6]; // NR.6, er vores indeks på likes, i vores JSON-fil


    // Vi laver herefter et nyt array, med brugeren som allerede er logget ind's, email.
    let newArray = new Array(userEmail);

    // Vi laver et loop, som starter på plads 0, og som kører igennem oldArray (potentielt user match), hvis længden er større end indeks [i], incrementer vi med 1.
    // Og derfor tilføjer gamle likes til nyt array.    
    for (i = 0; oldArray.length > i; i++){
        let oldValues = oldArray[i];

        newArray.push(oldValues);
    };

    // Vi sætter det potentielle matches like, ind i et nyt array.
    potentialUser.like = newArray

    fs.writeFileSync(dataPath +"/"+potentialUserEmail.email +".json", JSON.stringify(potentialUser, null, 2))
    res.json(potentialUser)
});



// Dislike post
router.post("/dislike", (req, res) => {

    // Får emailen af den nuværende bruger, samt emailen på det potentielle match
    var potentialUserEmail = req.body[1]; // indekset i body-arrayet, i fetch
    var userEmail = req.body[0].email // Indekset i body-arreyet, i fetch.
   

    // Vi finder det potentielle match, via vedkommenes email i vores 'Backend'
    let potentialUser = JSON.parse(fs.readFileSync(dataPath +"/"+ potentialUserEmail.email + ".json"));

    console.log(potentialUser);
    // Vi får fat, i de gamle dislikes fra vores 'Backend' mappe.
    var potentialUserValuesOld = Object.values(potentialUser)
    var oldArray = potentialUserValuesOld[7]; // NR.8, er vores indeks på dislike, i vores userModel, i Models mappen


    // Vi laver herefter et nyt array, med brugeren som allerede er logget ind's, email.
    let newArray = new Array(userEmail);

    // Vi laver et loop, som starter på plads 0, og som kører igennem oldArray (potentielt user match), hvis længden er større end indeks [i], incrementer vi med 1.
    // Og derfor tilføjer gamle dislikes til nyt array.
    for (i = 0; oldArray.length > i; i++){
        let oldValues = oldArray[i];

        newArray.push(oldValues)
    };

    // Vi sætter det potentielle matches dislike, ind i et nyt array.
    potentialUser.dislike = newArray

    fs.writeFileSync(dataPath +"/"+potentialUserEmail.email +".json", JSON.stringify(potentialUser, null, 2))
});

*/

// Match Alerts
router.post("/matchAlert", (req,res) => {
var interestUser = req.body[0]
var potentialUser = req.body[1]


var interestUserFiles = JSON.parse(fs.readFileSync(dataPath+"/"+interestUser.email+".json"))
var matched = false
console.log(interestUserFiles);
var interestUserLikes = Object.values(interestUserFiles)
//console.log(interestUserLikes[6]);
for(i = 0; interestUserLikes.length > i; i++){
    if (interestUserLikes[i] == potentialUser.email){
        matched = true
    }

}    
if(matched == true){
    res.status(200).json(matched)
}else {
    res.status(200).json(matched)
}

})





// CRUD-endpoints

// Finder Potentielle matches, baseret på gender & interest
router.post("/potentialMatch", (req, res) => {

fs.readdir(dataPath, (err, files) => {
    var sent = false;
     files.forEach(file => {

    var potentialUser = JSON.parse(fs.readFileSync(dataPath +"/"+file))
        if(sent == false) {
             if(req.body.gender == potentialUser.interest && req.body.interest == potentialUser.gender){

      // Disliked
        var disliked = false
          var potentialUserValues = Object.values(potentialUser)
            var potentialUserDislikedArray = potentialUserValues[7]; // Dislike i Arrayet i JSON-filen, har Index [7]

        for(i = 0; potentialUserDislikedArray.length > i; i++){  // Loop som går ind og tjekker vores JSON-filer, om der på Index [7] (Pladsen på vores Dislike-array), er en anden User som har Disliket
            if(potentialUserDislikedArray[i] == req.body.email){// Hvis indexet [i] i Arrayet == req.body.email (Som er brugerens email, som vi bruger til at skældne imellem brugere med), får vedkommende et Dislike.
                disliked = true
                
            };
        };

        
       // Liked 
        var liked = false
            var potentialUserValues = Object.values(potentialUser)
                var potentialUserLikedArray = potentialUserValues[6];// Like i Arrayet i JSON-filen, har Index [6]

                for(i = 0; potentialUserLikedArray.length > i; i++){  // Loop som går ind og tjekker vores JSON-filer, om der på Index [6] (Pladsen på vores Like-array), er en anden Users som har liket
                    if(potentialUserLikedArray[i] == req.body.email){ // Hvis indexet [i] i Arrayet == req.body.email (Som er brugerens email, som vi bruger til at skældne imellem brugere med), får vedkommende et like.
                        liked = true // Derfor er Liked = true.

                };
            };

        
        
        if(disliked == false && liked == false){ // Hvis Disliked == False (Ikke er blevet disliked) & Liked == False (Ikke blevet liket)
            res.json(potentialUser) // Sender den det videre, som res.json, uden et Like eller Dislike.
                sent = true

           }
          }
        }
      })
    });
  });  




// Interface - får informationer om brugeren, som er logget ind.
router.get("/interface", (req, res) => {
});


// Delete - Sletter Brugeren
router.delete("/delete", (req, res) =>{
    email = req.body.email // Vi definere, at email (som er aktiv key, i Localhost), er navnet på den mail vi har oprettet
    fs.unlink(dataPath +"/"+email + ".json", (err) => { // Vi går ind og fjerne den key i LocalStorage som er oprettet, som sletter brugeren.
    if (err){ throw (err)
    } else {
        console.log("Profile deleted")
    }
  })
});



// Login funtkion
router.post("/login", (req, res) => {

    console.log(req.body) 

// Let user går ind og finder emailen i json filen 
let user = JSON.parse(fs.readFileSync(dataPath + "/"+req.body.email + ".json"))
console.log(user)
if(user.password == req.body.password && user.email == req.body.email){ // Hvis passwordet der bliver tastet, er det samme som det oprettede (req.body.passowrd)
    res.json(user) // Sender den det videre, som res.json (user)
} else  {
    res.json({err: "Error"}) // hvis password der er indtastet ikke matcher det vi har i JSON filen, thrower vi en error.
    }
});


// Opretter en bruger
router.post("/register", (req, res) => {

const createdUser = new User(
    req.body.firstname,
    req.body.lastname,
    req.body.age,
    req.body.email,
    req.body.password,
    req.body.gender,
    req.body.interest,
    [],
    []
    );

// Vi brugeren bliver oprettet, bliver den sendt til datapath(backend), som en json fil
// Filnavnet, er emailen der bliver indtastet (req.body.email)
fs.writeFileSync(dataPath + "/" +req.body.email + ".json", JSON.stringify(createdUser, null, 2)), err =>  {
    if (err) throw error;
    

} 
})


router.put("/update", (req, res) => {
    const updatedUser = new User(
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.email,
        req.body.password,
        req.body.gender,
        req.body.interest,
        req.body.like,
        req.body.dislike,

    );

    fs.writeFileSync(dataPath+"/"+req.body.email+".json", JSON.stringify(updatedUser, null, 2)), err => {
    if (err) throw error;
    res.json(updatedUser)
}
})



module.exports = router;
