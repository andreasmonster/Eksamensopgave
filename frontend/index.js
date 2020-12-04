
var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var password = document.getElementById('password')
var email = document.getElementById('email')
var gender = document.getElementById('gender')
var interest = document.getElementById('interest')



function userCreate(){
    var user = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
        email: email.value,
        gender: gender.value,
        interest: interest.value,
        


    }
    console.log(user)
    // vi Henter data, fra dette Endpoint i serveren
    fetch("http://localhost:3000/User/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // det som kommer nu, vil være JSON-format. // 
        },
        body: JSON.stringify( // Vi laver attributterne i body, om til JSON
          user
        )
        
    }).catch(err => {
        console.log(err) // Vi fanger en error, hvis dette forekommer
    })


}




