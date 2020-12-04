// Viser En's matches

document.addEventListener("DOMContentLoaded", function() {

    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var interestUser = JSON.parse(userInterest) // Vi parser herefter informationerne, vi får fra keyen (vi laver strings om til objekter)


    fetch("http://localhost:3000/match", {
        method: "POST", // 
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(interestUser)
    }).then(response => response.json())
    .then(data =>{ // Data er det output vi får, fra input (det som bliver sendt, med response.json)

        let table = document.getElementById("match") // Vi får værdierne, fra table i vores HTML-fil, med ID'et "Match"
        let html ="";
        let userKeys = Object.keys(data);  // Vi få returneret et Array af et given Objekt, med værdierne i Arrayet.
        let userValues = Object.values(data); // Vi få returneret et Array af et given Objekt, med værdierne i Arrayet "Data", som er Outputtet fra vores Input.

    
// For loop, der starter i 0, som kører igennem JSON-filen, og tager værdien i vores Array, og laver et Table-row (I dette tilfælde, er data den person som er matchet meds' fornavn)
 let j = 0

 for (let i of userKeys){
        html += "<tr><td>" + "Firstname" + "</td><td>" + userValues[j] + "</td></tr>";

    j+=1
    }

    table.innerHTML = html;


}).catch(err => {
    throw (err)
})

});


