const express = require('express');
const router = express.Router();


class User{

constructor(firstname, lastname, age, email, password, gender, location){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.location = location;

    }
}


// De forskellige brugere
let user1 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location')
let user2 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location')
let user3 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location')
let user4 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location')

let allUsers = [user1, user2, user3, user4,]

exports.allUsers;
