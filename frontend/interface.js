


// Logge ud funktion
function logout(){

    window.localStorage.clear(); // Den clear localstorage, når vi kører funktionen
    window.location="index.html" // Vi referer, tilbage til Index-filen

}


// Slette bruger funktion
function deleteUser(){

    let userDel = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    console.log(userDel);
    var email = JSON.parse(userDel) // Vi parser herefter informationerne, vi får fra keyen
    console.log(email.email);

// Vi har ingen body, eftersom at vi ikke skal have noget tilbage --> vi sletter noget
    fetch("http://localhost:3000/User/register/delete/",{
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(email),

}).then(() => {
    console.log('has been removed');
 }).catch(err => {
   console.error(err)
 });
    window.location="index.html"
}

// Logged ind bruger
// Kildeliste til Assignment 3, i programmering
// Funktion der laver et nye TR (table row), for hvert objekt af user der er i vores LocalStorage
document.addEventListener("DOMContentLoaded", function() {
    var user = JSON.parse(localStorage.getItem("aktiv"))
    let table = document.getElementById("userTable");
    let html ="";
    let userKeys = Object.keys(user);
    let userValues = Object.values(user);

    var j = 0
    for (let i of userKeys) {
        html += "<tr><td>" + i + "</td><td>" + userValues[j] + "</td></tr>";
        j += 1
    }

    table.innerHTML = html;
});



// Opdater bruger
function updateUser() {


// Vi har ingen body, eftersom at vi ikke skal have noget tilbage --> vi sletter noget
    fetch("http://localhost:3000/User/register/update/",{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify("aktiv"),

}).then(() => {
    console.log('has been updated');
 }).catch(err => {
   console.error(err)
 });

}


// Loade potentielle matches
document.addEventListener("DOMContentLoaded", function() {

    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet

    var interestUser = JSON.parse(userInterest) // Vi parser herefter informationerne, vi får fra keyen
    console.log(userInterest.interestUser);

    fetch("http://localhost:3000/User/register/potentialMatch/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(interestUser)
    }).then(response => response.json())
    .then(data =>{
        console.log("matched with", data);
        let table = document.getElementById("potentialMatch")
        localStorage.setItem("aktivMatch", JSON.stringify(data))
        let html ="";
    
// Table, der viser vores 
        html += "<tr><td>" + "Firstname" + "</td><td>" + data.firstname + "</td></tr>";
        html += "<tr><td>" + "Lastname" + "</td><td>" + data.lastname + "</td></tr>";
        html += "<tr><td>" + "Interest" + "</td><td>" + data.interest + "</td></tr>";
        html += "<tr><td>" + "Gender" + "</td><td>" + data.gender + "</td></tr>";
        

    table.innerHTML = html;


})

});


// Disliker funktion
function Dislike() {

    // Her får vi de nuværende brugeres køn og interesser (hvad de søger)
    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var interestUser = JSON.parse(userInterest);

    // Her får vi vist, den nuværende bruger
    let potentialUserInterest = window.localStorage.getItem('aktivMatch'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var potentialUser = JSON.parse(potentialUserInterest);  // Vi parser herefter informationerne, vi får fra keyen
    
    fetch("http://localhost:3000/User/register/dislike/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify([interestUser, potentialUser]), // Problem her

    })

    .catch((error) => {
        console.error(error);

  });

};

        
   /* }).then(response => response.json())
    .then(data =>{
        console.log("You disliked", data);

        var userValues = Object.values(data)

        let table = document.getElementById("potentialMatch")
        let html ="";

        html += "<tr><td>" + "Firstname" + "</td><td>" + userValues[0] + "</td></tr>";
        html += "<tr><td>" + "Lastname" + "</td><td>" + userValues[1] + "</td></tr>";
        html += "<tr><td>" + "Email" + "</td><td>" + userValues[2] + "</td></tr>";
        html += "<tr><td>" + "Gender" + "</td><td>" + userValues[4] + "</td></tr>";
        html += "<tr><td>" + "Interest" + "</td><td>" + userValues[5] + "</td></tr>";
        

    table.innerHTML = html;

*/




// Like user

function Like() {

    // Her får vi de nuværende brugeres køn og interesser (hvad de søger)
    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var interestUser = JSON.parse(userInterest);

    // Her får vi vist, den nuværende bruger
    let potentialUserInterest = window.localStorage.getItem('aktivMatch'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var potentialUser = JSON.parse(potentialUserInterest);  // Vi parser herefter informationerne, vi får fra keyen
    
    fetch("http://localhost:3000/User/register/like/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify([interestUser, potentialUser]), // Problem her

    })

    .catch((error) => {
        console.error(error);

  });

};
