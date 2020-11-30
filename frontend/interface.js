
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

}
