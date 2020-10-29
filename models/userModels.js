const express = require('express');
const router = express.Router();


class User{

constructor(firstname, lastname, age, email, password, gender, location, interests){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.location = location;
    this.interests = interests;

    }
}


class Admin extends User {
    constructor(firstname, lastname, age, email, password, gender, location, interests){
    super(firstname, lastname, age, email, password, gender, location, interests);
    this.adminId = adminId;

    }
}




// De forskellige brugere
let user1 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location', 'interest')
let user2 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location', 'interest')
let user3 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location', 'interest')
let user4 = new User ('firstname', 'lastname', 'age', 'email', 'password', 'gender', 'location', 'interest')

let allUsers = [user1, user2, user3, user4,]

exports.allUsers;