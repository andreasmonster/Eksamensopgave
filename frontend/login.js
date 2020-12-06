
// Laver en login funktion
function login(){

// laver variabler, til password og email, som går ind og henter vores Output i HTML-filen.
var password = document.getElementById('password') // ID password, i HTML-filen.
var email = document.getElementById('email') // ID email, i HTML-filen.

// Vi opretter variabel, som tager værdien af password & Email variablen
let loginInformation = {
password: password.value,
email: email.value,
}
    
    fetch('http://localhost:3000/User/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInformation),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Logget ind:', data);
      localStorage.setItem("aktiv", JSON.stringify(data))  // Vi laver en local storage, som arkiverer data (email + pw), med en key, som hedder "aktiv"
      window.location="interface.html" // Her siger, vi at den skal åbne en ny html fil (brugerinterface), når ovenstående er kørt igennem.
      
    })
    .catch((error) => {
      console.error('Ku ikke logge ind:', error); // En error, hvis email og password ikke er korrekt.
    });
    }