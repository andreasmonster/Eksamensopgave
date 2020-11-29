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

    }
}



module.exports = User;
