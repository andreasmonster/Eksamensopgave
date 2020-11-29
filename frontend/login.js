
// Laver en login funktion
function login(){

// laver variabler, til password og email
var password = document.getElementById('password')
var email = document.getElementById('email')

// Vi opretter variabel, som tager værdien af password & Email variablen
let loginInformation = {
password: password.value,
email: email.value,
}
    
    fetch('http://localhost:3000/User/register/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInformation),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Logget ind:', data);
      localStorage.setItem("aktiv", JSON.stringify(data))  // Vi laver en local storage, som akrivere data (email + pw), med en key, som hedder "aktiv"
      window.location="interface.html" // Her siger, vi at den skal åbne en ny html fil (brugerinterface), hvis
      
    })
    .catch((error) => {
      console.error('Ku ikke logge ind:', error);
    });
    }