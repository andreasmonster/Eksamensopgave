const express = require("express");
const User = require("../models/userModels");
const fs = require('fs');
const router = express.Router();
const dataPath = "./backend"; // Kildehenvisning til Mads Holmvang // Viser hvilken mappe, vi skal gemme JSON filerne til



// Dislike post
router.post("/", (req, res) => {

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

module.exports = router;

