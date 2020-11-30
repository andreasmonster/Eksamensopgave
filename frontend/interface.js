
function logout(){

    window.localStorage.clear(); // Den clear localstorage, når vi kører funktionen
    window.location="index.html" // Vi referer, tilbage til Index-filen

}

// Slette bruger funktion
function deleteUser(email){


    var userDel = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key
    console.log(userDel);
    var email = JSON.parse(userDel).email
    console.log(email);

// Vi har ingen body, eftersom at vi ikke skal have noget tilbage --> vi sletter noget
    fetch("http://localhost:3000/User/register/delete/",{
    method: 'DELETE'

}).then(() => {
    console.log('removed');
 }).catch(err => {
   console.error(err)
 });

}

