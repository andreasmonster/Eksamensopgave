document.addEventListener("DOMContentLoaded", function() {

    let userInterest = window.localStorage.getItem('aktiv'); // får vores LocalStorage Key "aktiv" som er emailen somm er oprettet

    var interestUser = JSON.parse(userInterest) // Vi parser herefter informationerne, vi får fra keyen


    fetch("http://localhost:3000/match", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(interestUser)
    }).then(response => response.json())
    .then(data =>{

        let table = document.getElementById("match")
       // localStorage.setItem("aktivMatch", JSON.stringify(data))
        let html ="";
        let userKeys = Object.keys(data);
        let userValues = Object.values(data);

    
// For loop, der går ind og laver 
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