


// Logge ud funktion
function logout(){

    window.localStorage.clear(); // Den clear localstorage, når vi kører funktionen
    window.location="index.html" // Vi referer, tilbage til HTML-filen (index, somm er vores startside når vi logger ud.)

}


// Slette bruger funktion
function deleteUser(){

    let userDel = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet
    var email = JSON.parse(userDel) // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)
    console.log(email.email);

    fetch("http://localhost:3000/User/register/delete/",{
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(email), // Vi laver dataen "Email", om til en string.

}).then(() => {
    console.log('has been removed');
 }).catch(err => {
   console.error(err)
 });
    window.location="index.html" // Når ovenstående er kørt igennem, bliver man re-directet til index.html-filen
}



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



// Disliker funktion
function Dislike() {
    window.location.reload(); // Vi reloader hver gang funktionen kører, så næste potentielle-match i rækken kommer frem, efter der er blevet 'disliket'.
    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet på brugeren som er logget ind.
        var interestUser = JSON.parse(userInterest); // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)

    // Her får vi vist, den nuværende bruger
    let potentialUserInterest = window.localStorage.getItem('aktivMatch'); // får vores LocalStorage Key "aktivMatch" som er emailen på brugeren hos det potentielle Match
        var potentialUser = JSON.parse(potentialUserInterest);  // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)
    
    fetch("http://localhost:3000/User/register/dislike", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify([interestUser, potentialUser]), // Index [0] & [1], i arrayet.

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
 // Vi reloader hver gang funktionen kører, så næste potentielle-match i rækken kommer frem, efter der er blevet 'liket'.

    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet på brugeren som er logget ind. 
        var interestUser = JSON.parse(userInterest); // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)

    // Her får vi vist, den nuværende bruger
    let potentialUserInterest = window.localStorage.getItem('aktivMatch'); // får vores LocalStorage Key "aktivMatch" som er emailen på brugeren hos det potentielle Match
        var potentialUser = JSON.parse(potentialUserInterest);   // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)
    
    fetch("http://localhost:3000/User/register/Like/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify([interestUser, potentialUser]), // Index [0] & [1], i Arrayet.

    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        matchedAlert() // Inden like funktionen stopper, kalder vi på funktione "alertMatched()"

    })

    .catch((error) => {
        console.error(error); // Får en error, hvis en fejl opstår

  });


}  

function matchedAlert(){ // Næste funktion, som skal alerte, når vi har et match.


    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet på brugeren som er logget ind. 
    var interestUser = JSON.parse(userInterest); // Vi parser herefter informationerne, vi får fra key i LocalStorage (vi laver strings om til objekter)

// Her får vi vist, den nuværende bruger
let potentialUserInterest = window.localStorage.getItem('aktivMatch'); // får vores LocalStorage Key "aktivMatch" som er emailen på brugeren hos det potentielle Match
    var potentialUser = JSON.parse(potentialUserInterest);   // Vi parser herefter informationerne,
console.log(potentialUser.email);
console.log(interestUser.like);

fetch("http://localhost:3000/User/register/matchAlert", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify([interestUser, potentialUser]), // Index [0] & [1], i Arrayet.

    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data == true){
        alert("Matched")
        window.location.reload()
        } else {
            alert("No Match")
        window.location.reload()
        }
    })
}



// Opdater Bruger
var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var password = document.getElementById('password')
var email = document.getElementById('email')
var gender = document.getElementById('gender')
var interest = document.getElementById('interest')




function userUpdate(){

    // Vi definerer, at updateEmail stadig er localStorage "Aktiv"
    // Derfor, når vi opdaterer brugeren, bliver JSON-filen ved med at have det samme navn.
  var updateEmail = JSON.parse(localStorage.getItem("aktiv"))
  

    var userUpdate = {
         email:     updateEmail.email, // updateEmail.email, er det fordi vi beholder det samme navn (email), som er kriteriet for JSON-filen og LocalStorage.
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
        gender: updateEmail.gender,
        interest: updateEmail.interest,
        like: updateEmail.like,
        dislike: updateEmail.dislike
        

    }

    fetch("http://localhost:3000/User/register/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" // det som kommer nu, vil være JSON-format. // 
        },
        body: JSON.stringify( // Vi laver attributterne i body, om til JSON
          userUpdate
        )

    }).then(data =>{
        wlocalStorage.setItem('aktiv', data, JSON.stringify(userUpdate))
    })
    .catch(err => {
        console.log(err) // Vi fanger en error, hvis dette forekommer
    })


}














// User
// Kildeliste til Assignment 3, i programmering
// Funktion der laver et nye TR (table row), for hvert objekt af user der er i vores LocalStorage
document.addEventListener("DOMContentLoaded", function() {
    var user = JSON.parse(localStorage.getItem("aktiv"))
    let table = document.getElementById("userTable");
    let html ="";
    let userKeys = Object.keys(user);
    let userValues = Object.values(user);

    var j = 0
    for (i = 0; i < 6; i++) {
        html += "<tr><td>" + userKeys[i] + "</td><td>" + userValues[j] + "</td></tr>";
        j += 1
    }

    table.innerHTML = html;
});


// Loade potentielle matches
document.addEventListener("DOMContentLoaded", function() {

    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet

    var interestUser = JSON.parse(userInterest) // Vi parser herefter informationerne, vi får fra keyen

    fetch("http://localhost:3000/User/register/potentialMatch/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(interestUser)
    }).then(response => response.json())
    .then(data =>{
        console.log("Potential match, with", data.firstname);
        let table = document.getElementById("potentialMatch")
        localStorage.setItem("aktivMatch", JSON.stringify(data))
        let html ="";
    
// Table, der viser vores informationer (data.xx), som er informationerne på det potentielle match.
        html += "<tr><td>" + "Firstname" + "</td><td>" + data.firstname + "</td></tr>";
        html += "<tr><td>" + "Lastname" + "</td><td>" + data.lastname + "</td></tr>";
        html += "<tr><td>" + "Interest" + "</td><td>" + data.interest + "</td></tr>";
        html += "<tr><td>" + "Gender" + "</td><td>" + data.gender + "</td></tr>";
        

    table.innerHTML = html;


})

});
