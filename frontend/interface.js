
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

